import SectionHeading from "../../../shared/components/section-heading/SectionHeading";

import { latestProjects } from "../data/projects.data";

import ProjectCard from "./ProjectCard";

import "../styles/LatestWork.css";
import { Link } from "react-router-dom";

const LatestWork = () => {
  return (
    <section
      id="latest-work"
      className="latest-work"
      aria-labelledby="latest-work-title"
    >
      <div className="latest-work__container">
        <SectionHeading
          eyebrow="Selected projects"
          title="Latest work"
          titleId="latest-work-title"
          description="A selection of applications and APIs I have recently designed and developed."
        />

        <div className="latest-work__grid">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="latest-work__footer">
          <a
            href="https://github.com/CodingWithMBJ"
            target="_blank"
            rel="noreferrer"
            className="latest-work__all-projects"
          >
            View more on GitHub
          </a>

          <Link to="/projects" className="latest-work__all-projects">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
