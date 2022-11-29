import React from "react";

function Project({ _title, _description, _imgURL }) {
  return (
    <article className="project">
          <img className="project__image" src={_imgURL} />

        <div className="project__content">
          <h4 className="project__title">{_title}</h4>

          <span className="project__description">{_description}</span>
        </div>
    </article>
  );
}

export default Project;
