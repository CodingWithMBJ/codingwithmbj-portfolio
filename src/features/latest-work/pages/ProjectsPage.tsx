import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../data/projects.data";

import "../styles/ProjectsPage.css";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <main className="projects-page">
      <div className="projects-page__container">
        <header className="projects-page__header">
          <div className="projects-page__heading">
            <p className="projects-page__eyebrow">Portfolio</p>

            <h1 className="projects-page__title">All Projects</h1>

            <p className="projects-page__description">
              A collection of frontend, backend, and full-stack applications I
              have designed and developed.
            </p>
          </div>

          <Link className="projects-page__back" to="/">
            Back home
          </Link>
        </header>

        <div className="projects-page__grid">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
