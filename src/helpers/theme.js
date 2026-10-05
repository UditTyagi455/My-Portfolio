const setTheme = (currentTheme = "cyan", mode = "dark") => {
  const isLight = mode === "light";
  document.documentElement.setAttribute("data-theme-mode", mode);
  localStorage.setItem("portfolio-selected-theme", currentTheme);
  localStorage.setItem("portfolio-theme-mode", mode);

  // Set the active theme accent color
  document.documentElement.style.setProperty(
    "--selected-theme-main-color",
    `var(--${currentTheme}-theme-main-color)`
  );

  // Set background, nav, text, and card variables based on light/dark mode
  document.documentElement.style.setProperty(
    "--selected-theme-background-color",
    isLight ? "var(--light-mode-background-color)" : "var(--dark-mode-background-color)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-nav-background-color",
    isLight ? "var(--light-mode-nav-background-color)" : "var(--dark-mode-nav-background-color)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-sub-text-color",
    isLight ? "var(--light-mode-text-color)" : "var(--dark-mode-text-color)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-card-background",
    isLight ? "var(--light-mode-card-background)" : "var(--dark-mode-card-background)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-card-border",
    isLight ? "var(--light-mode-card-border)" : "var(--dark-mode-card-border)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-item-subtext",
    isLight ? "var(--light-mode-subtext-color)" : "var(--dark-mode-subtext-color)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-input-bg",
    isLight ? "var(--light-mode-input-bg)" : "var(--dark-mode-input-bg)"
  );
  document.documentElement.style.setProperty(
    "--selected-theme-shadow",
    isLight ? "var(--light-mode-shadow)" : "var(--dark-mode-shadow)"
  );
};

export default setTheme;

