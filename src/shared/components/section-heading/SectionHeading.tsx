import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  titleId,
}: SectionHeadingProps) => {
  return (
    <header className="section-heading">
      <div className="section-heading__title-group">
        <p className="section-heading__eyebrow">{eyebrow}</p>

        <h2 id={titleId} className="section-heading__title">
          {title}
        </h2>
      </div>

      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </header>
  );
};

export default SectionHeading;
