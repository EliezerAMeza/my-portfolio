import React, { useRef, useState } from "react";

import Project from "./Project";

import { projectsSource } from "./Data";

// ?-- swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Mis proyectos</h2>
      <span className="section__subtitle">...</span>

      {/* {projectsSource.map((project) => {
          return (
            <Project
              key={project.id}
              _title={project.title}
              _description={project.description}
              _imgURL={project.imgURL}
            />
          );
        })} */}

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        spaceBetween={24}
        modules={[Pagination]}
        className="projects__container"
      >
        {projectsSource.map((project) => {
          return (
            <SwiperSlide className="projects__slide" key={project.id}>
              <Project
                _title={project.title}
                _description={project.description}
                _imgURL={project.imgURL}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Projects;
