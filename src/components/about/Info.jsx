import React from "react";

import { BiJoystick } from "react-icons/bi";
import { BsEmojiLaughingFill } from "react-icons/bs";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <BiJoystick className="about__icon" />

        <h3 className="about__title">Lorem, ipsum dolor.</h3>
      </div>

      <div className="about__box">
        <BiJoystick className="about__icon" />

        <h3 className="about__title">Lorem, ipsum dolor.</h3>
      </div>

      <div className="about__box">
        <BiJoystick className="about__icon" />

        <h3 className="about__title">Lorem, ipsum dolor.</h3>
      </div>

      {/* 
      <div className="about__box">
        <UilDiaryAlt className="about__icon" />

        <h3 className="about__title">Filosofia</h3>
        <span className="about__subtitle">Aprendizaje constante</span>
      </div> 
      */}
    </div>
  );
}

export default Info;
