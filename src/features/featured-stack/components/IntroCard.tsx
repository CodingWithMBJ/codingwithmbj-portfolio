import type { StackCategory } from "../data/featuredStack";

interface IntroCardProps {
  activeStack: StackCategory | null;
  openModal: (stack: StackCategory) => void;
}

const IntroCard = ({ activeStack, openModal }: IntroCardProps) => {
  return (
    <div className="stack-intro">
      <div className="stack-intro__content">
        <span className="stack-intro__eyebrow">Hello, I&apos;m</span>

        <h1 className="stack-intro__name">Mohamed Jalloh</h1>

        <p className="stack-intro__title">Full-Stack Software Engineer</p>

        <p className="stack-intro__description">
          I build modern digital experiences from interface to infrastructure.
        </p>
      </div>

      <div className="stack-intro__directions" aria-hidden="true">
        <span
          className={[
            "stack-intro__direction",
            activeStack === "backend" ? "active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          ← Backend
        </span>

        <span
          className={[
            "stack-intro__direction",
            activeStack === "frontend" ? "active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          Frontend →
        </span>
      </div>

      <div className="stack-intro__mobile-actions">
        <button type="button" onClick={() => openModal("backend")}>
          Explore Backend
        </button>

        <button type="button" onClick={() => openModal("frontend")}>
          Explore Frontend
        </button>
      </div>
    </div>
  );
};

export default IntroCard;
