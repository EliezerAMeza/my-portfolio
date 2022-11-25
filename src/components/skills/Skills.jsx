import React, { useState } from "react";

import Frontend from "./Frontend";
import Backend from "./Backend";

import { ImHtmlFive, ImDatabase } from "react-icons/im";

import { CgFigma } from "react-icons/cg";

import "./Skills.css";

function Skills() {
  const [tabCurrent, setTabCurrent] = useState(2);

  const showTab = (_index) => {
    setTabCurrent(_index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Conocimientos</h2>
      <span className="section__subtitle">Mi nivel tecnico</span>

      <div className="skills__container container grid">
        <div className="skills__tabs">
          {/* <div className="skills__button skills__active button--flex"> */}
          <div
            className={
              tabCurrent === 1
                ? "skills__button button--flex skills__active"
                : "skills__button button--flex"
            }
            onClick={() => setTabCurrent(1)}
          >
            <ImHtmlFive className="skills__icon" />
            Frontend
          </div>

          <div
            className={
              tabCurrent === 2
                ? "skills__button button--flex skills__active"
                : "skills__button button--flex"
            }
            onClick={() => setTabCurrent(2)}
          >
            <ImDatabase className="skills__icon" />
            Backend
          </div>

          <div
            className={
              tabCurrent === 3
                ? "skills__button button--flex skills__active"
                : "skills__button button--flex"
            }
            onClick={() => setTabCurrent(3)}
          >
            <CgFigma className="skills__icon" />
            Otros
          </div>
        </div>

        {/* <Frontend /> */}
        {/* <Backend /> */}

        <div className="skills__sections">
          {/* <div className="skills__content skills__content-active"> */}
          <div
            className={
              tabCurrent === 1
                ? "skills__content skills__content-active"
                : "skills__content"
            }
          >
            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/frontend/html.png"
                  alt="html"
                />
                <tool-tip role="tool-tip">
                  <h4>HTML</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img src="/src/assets/img/skills/frontend/css.png" alt="css" />

                <tool-tip role="tool-tip">
                  <h4>CSS</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img src="/src/assets/img/skills/frontend/js.png" alt="js" />

                <tool-tip role="tool-tip">
                  <h4>javascript</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/frontend/sass.png"
                  alt="sass"
                />

                <tool-tip role="tool-tip">
                  <h4>SASS</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/frontend/angular.png"
                  alt="angular"
                />

                <tool-tip role="tool-tip">
                  <h4>Angular</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/frontend/react.png"
                  alt="react"
                />

                <tool-tip role="tool-tip">
                  <h4>React</h4>
                  <h5>intermedio</h5>
                </tool-tip>
              </div>
            </div>
          </div>

          <div
            className={
              tabCurrent === 2
                ? "skills__content skills__content-active"
                : "skills__content"
            }
          >
            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/backend/pyton.png"
                  alt="pyton"
                />

                <tool-tip role="tool-tip">
                  <h4>Pyton</h4>
                  <h5>basico</h5>
                </tool-tip>
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card__icon">
                <img
                  src="/src/assets/img/skills/backend/postgreSQL.png"
                  alt="postgreSQL"
                />

                <tool-tip role="tool-tip">
                  <h4>postgreSQL</h4>
                  <h5>basico</h5>
                </tool-tip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
