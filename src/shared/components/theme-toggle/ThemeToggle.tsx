import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../hooks/useTheme";

import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkTheme = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
      }
      title={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
