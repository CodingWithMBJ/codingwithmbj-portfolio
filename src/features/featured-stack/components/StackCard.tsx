import type { CSSProperties } from "react";

import type { FeaturedStackData, StackCategory } from "../data/featuredStack";

interface StackCardProps {
  stack: FeaturedStackData;
  activeStack: StackCategory | null;
}

type TechnologyStyles = CSSProperties & {
  "--technology-index": number;
  "--technology-depth": number;
  "--technology-rotation": `${number}deg`;
};

const StackCard = ({ stack, activeStack }: StackCardProps) => {
  const isActive = activeStack === stack.id;

  return (
    <article
      className={[
        "stack-side",
        `stack-side--${stack.id}`,
        isActive ? "stack-side--active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!isActive}
    >
      <div className="stack-side__surface" aria-hidden="true" />

      <div className="stack-side__technologies" aria-hidden="true">
        {stack.technologies.map((technology, index) => {
          const depth = (index % 4) + 1;

          const style: TechnologyStyles = {
            top: technology.top,
            left: technology.left,

            "--technology-index": index,
            "--technology-depth": depth,
            "--technology-rotation": `${technology.rotation ?? 0}deg`,
          };

          return (
            <span
              key={technology.id}
              className={[
                "stack-side__technology",
                `stack-side__technology--${technology.size}`,
              ].join(" ")}
              style={style}
            >
              {technology.name}
            </span>
          );
        })}
      </div>

      <div className="stack-side__content">
        <h2 className="stack-side__title">{stack.title}</h2>

        <p className="stack-side__description">{stack.description}</p>
      </div>
    </article>
  );
};

export default StackCard;
