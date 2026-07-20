import ThemeToggle from "../theme-toggle/ThemeToggle";
import Navigation from "./Navigation";

import "./ActionNav.css";

const ActionNav = () => {
  return (
    <aside className="action-nav" aria-label="Quick actions">
      <Navigation />

      <span className="action-nav__divider" aria-hidden="true" />

      <ThemeToggle />
    </aside>
  );
};

export default ActionNav;
