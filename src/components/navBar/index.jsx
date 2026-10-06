import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaSun,
  FaMoon,
  FaHome,
  FaUserAlt,
  FaBrain,
  FaFileAlt,
  FaRocket,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import setTheme from "../../helpers/theme";
import "./styles.scss";

const getNavIcon = (iconName) => {
  switch (iconName) {
    case "home":
      return <FaHome className="nav-item-icon" />;
    case "about":
      return <FaUserAlt className="nav-item-icon" />;
    case "skills":
      return <FaBrain className="nav-item-icon" />;
    case "resume":
      return <FaFileAlt className="nav-item-icon" />;
    case "projects":
      return <FaRocket className="nav-item-icon" />;
    case "contact":
      return <FaEnvelope className="nav-item-icon" />;
    default:
      return <FaHome className="nav-item-icon" />;
  }
};

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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [click]);

  // Close menu automatically on route change
  useEffect(() => {
    setClick(false);
  }, [location.pathname]);

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
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo" onClick={() => setClick(false)}>
            <h2>UDIT</h2>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navbar__desktop-menu">
            {navMenus.map((item, key) => {
              const active = isLinkActive(item.to);
              return (
                <li
                  key={key}
                  className={`navbar__desktop-menu__item ${active ? "active" : ""}`}
                >
                  <Link
                    to={item.to}
                    className={`navbar__desktop-menu__item__links ${active ? "active-link" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action buttons (Theme Toggle & Hamburger) */}
          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__mode-toggle-btn"
              onClick={handleToggleMode}
              title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle Theme Mode"
            >
              {mode === "dark" ? (
                <FaSun className="mode-icon-sun" />
              ) : (
                <FaMoon className="mode-icon-moon" />
              )}
            </button>

            <button
              type="button"
              className={`nav-icon-toggle-btn ${click ? "is-open" : ""}`}
              onClick={handleClick}
              aria-label="Toggle Navigation Menu"
            >
              {click ? <HiX size={26} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Solid background, High Z-Index, Crisp UI) */}
      <aside className={`navbar__mobile-drawer ${click ? "active" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-user-profile">
            <span className="profile-dot" />
            <span className="profile-title">Full Stack & AI Dev</span>
          </div>
          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={() => setClick(false)}
            aria-label="Close menu"
          >
            <HiX size={22} />
          </button>
        </div>

        <ul className="mobile-drawer-menu">
          {navMenus.map((item, key) => {
            const active = isLinkActive(item.to);
            return (
              <li key={key} className="mobile-drawer-item">
                <Link
                  to={item.to}
                  className={`mobile-drawer-link ${active ? "active" : ""}`}
                  onClick={() => setClick(false)}
                >
                  <span className="nav-item-icon-wrapper">
                    {getNavIcon(item.icon)}
                  </span>
                  <span className="nav-item-label">{item.label}</span>
                  {active && <span className="mobile-active-dot" />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Drawer Footer with Socials */}
        <div className="mobile-drawer-footer">
          <div className="mobile-socials">
            <a
              href="https://github.com/UditTyagi455"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="mobile-social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/udit-tyagi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mobile-social-icon"
            >
              <FaLinkedinIn />
            </a>
            <Link
              to="/My-Portfolio/contact"
              onClick={() => setClick(false)}
              className="mobile-contact-pill"
            >
              <FaEnvelope /> Contact
            </Link>
          </div>
        </div>
      </aside>

      {/* Dimmed backdrop overlay for mobile menu (Placed behind drawer at z-index 990) */}
      <div
        className={`navbar__backdrop ${click ? "active" : ""}`}
        onClick={() => setClick(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
