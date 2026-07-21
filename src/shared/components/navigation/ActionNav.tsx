import { useEffect, useState } from "react";

import ThemeToggle from "../theme-toggle/ThemeToggle";
import Navigation from "./Navigation";

import "./ActionNav.css";

const ActionNav = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      /*
       * Schedule the update outside the synchronous
       * body of the effect.
       */
      const frameId = window.requestAnimationFrame(() => {
        setIsHeroVisible(false);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside
      className={`action-nav ${
        isHeroVisible ? "action-nav--hidden" : "action-nav--visible"
      }`}
      aria-label="Quick actions"
    >
      <Navigation />

      <span className="action-nav__divider" aria-hidden="true" />

      <ThemeToggle />
    </aside>
  );
};

export default ActionNav;
