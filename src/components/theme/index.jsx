import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import setTheme from "../../helpers/theme";
import "./styles.scss";

const colorsArray = [
  {
    id: "cyan",
    name: "Cyber Cyan",
    bgColor: "#00f2fe",
  },
  {
    id: "purple",
    name: "Electric Violet",
    bgColor: "#a855f7",
  },
  {
    id: "green",
    name: "Neon Mint",
    bgColor: "#00f5a0",
  },
  {
    id: "yellow",
    name: "Solar Gold",
    bgColor: "#f59e0b",
  },
  {
    id: "red",
    name: "Cyber Rose",
    bgColor: "#ff2a6d",
  },
  {
    id: "blue",
    name: "Sapphire Blue",
    bgColor: "#38bdf8",
  },
];

const Theme = () => {
  const [theme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("portfolio-selected-theme") || "cyan";
  });
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    localStorage.setItem("portfolio-selected-theme", currentId);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div
        className="theme-wrapper__toggle-icon"
        onClick={() => setToggle(!toggle)}
        title="Theme Settings"
      >
        <ImCog size={22} />
      </div>
      <div className="theme-wrapper__menu">
        <h4 className="theme-menu-title">Accent Palette</h4>
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

