import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import {
  backendStack,
  frontendStack,
  type StackCategory,
} from "../data/featuredStack";

interface StackModalProps {
  stackCategory: StackCategory | null;
  closeModal: () => void;
}

const StackModal = ({ stackCategory, closeModal }: StackModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const stack =
    stackCategory === "backend"
      ? backendStack
      : stackCategory === "frontend"
        ? frontendStack
        : null;

  useEffect(() => {
    if (!stack) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [stack, closeModal]);

  if (!stack) {
    return null;
  }

  return createPortal(
    <div
      className="stack-modal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <section
        className="stack-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="stack-modal-title"
      >
        <header className="stack-modal__header">
          <h2 id="stack-modal-title">{stack.title}</h2>

          <button
            ref={closeButtonRef}
            type="button"
            className="stack-modal__close"
            onClick={closeModal}
            aria-label={`Close ${stack.title} stack`}
          >
            ×
          </button>
        </header>

        <div className="stack-modal__grid">
          {stack.technologies.map((technology) => (
            <div key={technology.id} className="stack-modal__technology">
              {technology.name}
            </div>
          ))}
        </div>
      </section>
    </div>,
    document.body,
  );
};

export default StackModal;
