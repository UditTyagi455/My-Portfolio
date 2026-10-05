import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import setTheme from "../../helpers/theme";
import "./styles.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("portfolio-theme-mode") || "dark";
  });

  const location = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  const handleToggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    const currentTheme = localStorage.getItem("portfolio-selected-theme") || "cyan";
    setTheme(currentTheme, newMode);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedMode = localStorage.getItem("portfolio-theme-mode") || "dark";
      setMode(storedMode);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Helper to check if a menu item is currently active
  const isLinkActive = (to) => {
    const current = location.pathname;
    if (to === "/" || to === "/My-Portfolio" || to === "/My-Portfolio/") {
      return current === "/" || current === "/My-Portfolio" || current === "/My-Portfolio/";
    }
    const cleanTo = to.replace("/My-Portfolio/", "").replace("/My-Portfolio", "").replace("/", "");
    const cleanCurrent = current.replace("/My-Portfolio/", "").replace("/My-Portfolio", "").replace("/", "");
    return cleanCurrent === cleanTo || current === to;
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <h2>UDIT</h2>
          </Link>

          <ul
            className={
              click ? "navbar__container__menu active" : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => {
              const active = isLinkActive(item.to);
              return (
                <li
                  key={key}
                  className={`navbar__container__menu__item ${active ? "active" : ""}`}
                >
                  <Link
                    to={item.to}
                    className={`navbar__container__menu__item__links ${active ? "active-link" : ""}`}
                    onClick={() => setClick(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__mode-toggle-btn"
              onClick={handleToggleMode}
              title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
            >
              {mode === "dark" ? (
                <FaSun className="mode-icon-sun" />
              ) : (
                <FaMoon className="mode-icon-moon" />
              )}
            </button>

            <div className="nav-icon" onClick={handleClick}>
              {click ? <HiX size={28} /> : <FaBars size={28} />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


