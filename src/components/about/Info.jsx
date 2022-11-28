import React from "react";

import { BiJoystick } from "react-icons/bi";
import { GiCat } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <GiCat className="about__icon" />

        <h3 className="about__title">Gatos</h3>
      </div>

      <div className="about__box">
        <BiJoystick className="about__icon" />

        <h3 className="about__title">Videojuegos</h3>
      </div>

      <div className="about__box">
        <TbBooks className="about__icon" />

        <h3 className="about__title">Libros</h3>
      </div>

    </div>
  );
}

export default Info;
