import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

function Project({ _title, _description, _imgURL }) {
  return (
    <article className="project">
      <img className="project__image" src={_imgURL} />

      <div className="project__content">
        <h4 className="project__title">{_title}</h4>

        <button className="button button--flex project__button">
          Ver
          <AiOutlineArrowRight className="button__icon" />
        </button>
      </div>
    </article>
  );
}

export default Project;
