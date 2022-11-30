import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">Eliezer A Meza</h1>
      <h3 className="home__subtitle"> Desarrollador web</h3>

      <p className="home__description">
        Soy un estudiante de ingenieria y desarrollador web, fanatico de los
        videojuegos, el cine y la comedia.
      </p>

      <a href="#contact" className="button button--flex home__button">
        Contactame
        <RiSendPlaneFill className="button__icon" />
      </a>
    </div>
  );
}

export default Data;
