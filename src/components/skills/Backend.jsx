import React from "react";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </article>

          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </article>

          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </article>
        </div>

        <div className="skills__group">
          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </article>

          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </article>

          <article className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">postgreSQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Backend;
