import { useEffect, useState } from "react";

import fullLogo from "../../../assets/FullLogo_Transparent_NoBuffer (2).png";

import "./LoadingIntro.css";

type LoadingIntroProps = {
  minimumDuration?: number;
  exitDuration?: number;
  onComplete: () => void;
};

const LoadingIntro = ({
  minimumDuration = 2200,
  exitDuration = 700,
  onComplete,
}: LoadingIntroProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, minimumDuration);

    const completeTimer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      onComplete();
    }, minimumDuration + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [exitDuration, minimumDuration, onComplete]);

  return (
    <div
      className={`loading-intro ${isExiting ? "loading-intro--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading CodingWithMBJ portfolio"
    >
      <div className="loading-intro__background" aria-hidden="true">
        <span className="loading-intro__glow loading-intro__glow--primary" />
        <span className="loading-intro__glow loading-intro__glow--accent" />
        <span className="loading-intro__grid" />
      </div>

      <div className="loading-intro__content">
        <div className="loading-intro__logo-wrapper">
          <span className="loading-intro__logo-glow" aria-hidden="true" />

          <img
            className="loading-intro__logo"
            src={fullLogo}
            alt="CodingWithMBJ"
            draggable={false}
          />
        </div>

        <div className="loading-intro__loader" aria-hidden="true">
          <span className="loading-intro__loader-track">
            <span className="loading-intro__loader-progress" />
          </span>
        </div>

        <p className="loading-intro__message">
          Building thoughtful digital experiences
          <span className="loading-intro__dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingIntro;
