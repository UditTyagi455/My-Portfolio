import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import { FaCheck, FaSun, FaMoon } from "react-icons/fa";
import setTheme from "../../helpers/theme";
import "./styles.scss";

const colorsArray = [
  {
    id: "cyan",
    name: "Cyber Cyan",
    bgColor: "#00bcd4",
  },
  {
    id: "purple",
    name: "Electric Violet",
    bgColor: "#8b5cf6",
  },
  {
    id: "green",
    name: "Neon Mint",
    bgColor: "#10b981",
  },
  {
    id: "yellow",
    name: "Solar Gold",
    bgColor: "#f59e0b",
  },
  {
    id: "red",
    name: "Cyber Rose",
    bgColor: "#f43f5e",
  },
  {
    id: "blue",
    name: "Sapphire Blue",
    bgColor: "#0284c7",
  },
];

const Theme = () => {
  const [theme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("portfolio-selected-theme") || "cyan";
  });
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("portfolio-theme-mode") || "dark";
  });
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    setTheme(currentId, mode);
  };

  const handleToggleMode = (newMode) => {
    setMode(newMode);
    setTheme(theme, newMode);
  };

  useEffect(() => {
    setTheme(theme, mode);
  }, [theme, mode]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div
        className="theme-wrapper__toggle-icon"
        onClick={() => setToggle(!toggle)}
        title="Theme & Mode Settings"
      >
        <ImCog size={22} />
      </div>

      <div className="theme-wrapper__menu">
        {/* Mode Selector (Light / Dark) */}
        <h4 className="theme-menu-title">Appearance Mode</h4>
        <div className="mode-toggle-group">
          <button
            type="button"
            className={`mode-btn ${mode === "light" ? "active-mode" : ""}`}
            onClick={() => handleToggleMode("light")}
          >
            <FaSun className="mode-icon sun" />
            <span>Light</span>
          </button>
          <button
            type="button"
            className={`mode-btn ${mode === "dark" ? "active-mode" : ""}`}
            onClick={() => handleToggleMode("dark")}
          >
            <FaMoon className="mode-icon moon" />
            <span>Dark</span>
          </button>
        </div>

        {/* Accent Color Palette */}
        <h4 className="theme-menu-title" style={{ marginTop: "16px" }}>
          Accent Palette
        </h4>
        <div className="color-swatches-grid">
          {colorsArray.map((item) => (
            <button
              key={item.id}
              className={`color-swatch-btn ${theme === item.id ? "active-theme" : ""}`}
              onClick={() => handleToggleTheme(item.id)}
              title={item.name}
              style={{ "--swatch-color": item.bgColor }}
            >
              <span
                className="color-dot"
                style={{ backgroundColor: item.bgColor }}
              >
                {theme === item.id && <FaCheck className="check-icon" />}
              </span>
              <span className="color-name">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme;


