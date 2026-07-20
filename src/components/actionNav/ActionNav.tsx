import Navigation from "../nav/Navigation";
import ThemeToggle from "../../shared/components/theme-toggle/ThemeToggle";

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
