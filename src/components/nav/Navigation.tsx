import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navigation } from "../../data/navigation";

import "./Navigation.css";

interface NavigationProps {
  closeMenu?: () => void;
}

const Navigation = ({ closeMenu }: NavigationProps) => {
  const handleNavigation = (section?: string, path?: string) => {
    closeMenu?.();

    if (section) {
      const targetSection = document.getElementById(section);

      if (!targetSection) {
        return;
      }

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${section}`);
      return;
    }

    if (path) {
      window.location.assign(path);
    }
  };

  return (
    <nav className="navigation" aria-label="Primary navigation">
      <ul className="navigation__list">
        {navigation.map((item) => (
          <li key={item.id} className="navigation__item">
            <button
              type="button"
              className="navigation__link"
              onClick={() => handleNavigation(item.section, item.path)}
              aria-label={item.name}
              title={item.name}
            >
              <FontAwesomeIcon icon={item.icon} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
