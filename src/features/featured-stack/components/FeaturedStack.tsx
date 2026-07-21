import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

import BackendCard from "./BackendCard";
import FrontendCard from "./FrontendCard";
import IntroCard from "./IntroCard";
import StackModal from "./StackModal";

import type { StackCategory } from "../data/featuredStack";

import "../styles/FeaturedStack.css";

type FeaturedStackStyles = CSSProperties & {
  "--hover-progress": number;
  "--reveal-strength": number;

  "--backend-strength": number;
  "--frontend-strength": number;

  "--backend-reveal": `${number}%`;
  "--frontend-reveal": `${number}%`;

  "--pointer-position": `${number}%`;

  "--intro-opacity": number;
  "--intro-scale": number;
  "--intro-blur": `${number}px`;
};

const CENTER_DEAD_ZONE = 0.08;
const SPRING_STRENGTH = 0.1;
const REST_THRESHOLD = 0.001;

const normalizeProgress = (position: number) => {
  const rawProgress = (position - 0.5) * 2;
  const absoluteProgress = Math.abs(rawProgress);

  if (absoluteProgress <= CENTER_DEAD_ZONE) {
    return 0;
  }

  const normalizedStrength =
    (absoluteProgress - CENTER_DEAD_ZONE) / (1 - CENTER_DEAD_ZONE);

  return Math.sign(rawProgress) * Math.min(normalizedStrength, 1);
};

const FeaturedStack = () => {
  const [hoverProgress, setHoverProgress] = useState(0);
  const [modalStack, setModalStack] = useState<StackCategory | null>(null);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      return;
    }

    const animate = () => {
      const currentProgress = currentProgressRef.current;
      const targetProgress = targetProgressRef.current;

      const difference = targetProgress - currentProgress;

      const nextProgress =
        Math.abs(difference) <= REST_THRESHOLD
          ? targetProgress
          : currentProgress + difference * SPRING_STRENGTH;

      currentProgressRef.current = nextProgress;
      setHoverProgress(nextProgress);

      const hasReachedTarget =
        Math.abs(targetProgress - nextProgress) <= REST_THRESHOLD;

      if (hasReachedTarget) {
        currentProgressRef.current = targetProgress;
        setHoverProgress(targetProgress);
        animationFrameRef.current = null;
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const updateTargetProgress = useCallback(
    (progress: number) => {
      targetProgressRef.current = progress;
      startAnimation();
    },
    [startAnimation],
  );

  const resetHero = useCallback(() => {
    updateTargetProgress(0);
  }, [updateTargetProgress]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const isMobile = window.matchMedia("(max-width: 700px)").matches;

    if (isMobile || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const positionWithinHero = (event.clientX - bounds.left) / bounds.width;

    const clampedPosition = Math.min(Math.max(positionWithinHero, 0), 1);

    updateTargetProgress(normalizeProgress(clampedPosition));
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const backendStrength = Math.max(-hoverProgress, 0);
  const frontendStrength = Math.max(hoverProgress, 0);
  const revealStrength = Math.abs(hoverProgress);

  const activeStack: StackCategory | null =
    hoverProgress < -0.03
      ? "backend"
      : hoverProgress > 0.03
        ? "frontend"
        : null;

  /*
   * Keep the intro completely centered.
   * It fades, scales and blurs instead of translating.
   */
  const introOpacity = Math.max(0, 1 - revealStrength * 1.15);
  const introScale = 1 - revealStrength * 0.045;
  const introBlur = revealStrength * 9;

  /*
   * Each side can grow from 0% to slightly beyond 100%.
   * The small multiplier helps the side completely cover the stage
   * when the cursor reaches an edge.
   */
  const backendReveal = Math.min(backendStrength * 108, 100);
  const frontendReveal = Math.min(frontendStrength * 108, 100);

  const pointerPosition = 50 + hoverProgress * 50;

  const styles: FeaturedStackStyles = {
    "--hover-progress": hoverProgress,
    "--reveal-strength": revealStrength,

    "--backend-strength": backendStrength,
    "--frontend-strength": frontendStrength,

    "--backend-reveal": `${backendReveal}%`,
    "--frontend-reveal": `${frontendReveal}%`,

    "--pointer-position": `${pointerPosition}%`,

    "--intro-opacity": introOpacity,
    "--intro-scale": introScale,
    "--intro-blur": `${introBlur}px`,
  };

  return (
    <section className="featured-stack">
      <div
        className={[
          "featured-stack__stage",
          activeStack ? `featured-stack__stage--${activeStack}` : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={styles}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetHero}
      >
        <BackendCard activeStack={activeStack} />

        <FrontendCard activeStack={activeStack} />

        <IntroCard activeStack={activeStack} openModal={setModalStack} />
      </div>

      <StackModal
        stackCategory={modalStack}
        closeModal={() => setModalStack(null)}
      />
    </section>
  );
};

export default FeaturedStack;
