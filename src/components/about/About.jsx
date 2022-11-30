import React from "react";

import Info from "./Info";

import "./About.css";

import { FaFileDownload } from "react-icons/fa";


import AboutImg from "../../assets/img/me.webp";

import CV from "../../assets/docs/eliezeraMeza-CV.pdf";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mi</h2>
      <span className="section__subtitle">Mi introduccion</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="aboutImg" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Desarrollador web, orientado al Frontend y al diseño UI/UX. En
            constante aprendizaje de nuevas tecnologias. Siempre en busqueda de
            nuevos conocimientos y experiencias.
          </p>

          <a download="" href={CV} className="button button--flex">
            Curriculum
            <FaFileDownload className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
