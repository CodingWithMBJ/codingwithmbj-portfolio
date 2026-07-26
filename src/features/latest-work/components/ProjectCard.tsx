import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          className="project-card__image"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={handleImageError}
        />

        <div className="project-card__image-fallback">
          <span>{project.title}</span>
        </div>

        <span className="project-card__type">{project.type}</span>
      </div>

      <div className="project-card__content">
        <div className="project-card__content-header">
          <div className="project-card__meta">
            <span>{project.category}</span>
            <span aria-hidden="true">•</span>
            <time>{project.date}</time>
          </div>

          <h3 className="project-card__title">{project.title}</h3>

          <p className="project-card__description">{project.description}</p>

          <ul
            className="project-card__stack"
            aria-label={`${project.title} technologies`}
          >
            {project.techStack.map((technology) => (
              <li key={technology} className="project-card__technology">
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card__actions">
          {project.liveLink && (
            <a
              className="project-card__link project-card__link--primary"
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              View project
            </a>
          )}

          {project.githubLink ? (
            <a
              className="project-card__link"
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              View code
            </a>
          ) : (
            <button className="project-card__link">Coming Soon</button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
