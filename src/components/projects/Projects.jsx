import React from "react";

import Project from "./Project";

import { projectsSource } from "./Data";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Mis proyectos</h2>
      <span className="section__subtitle">...</span>

      <div className="projects__container container grid">
        {projectsSource.map((project) => {
          return (
            <Project
              _title={project.title}
              _description={project.description}
              _imgURL={project.imgURL}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
