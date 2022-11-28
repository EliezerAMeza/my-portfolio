import React, { useState } from "react";

import { BsFillCalendarFill } from "react-icons/bs";

import "./Qualification.css";

function Qualification() {
  const [tabCurrent, setTabCurrent] = useState(2);

  const showTab = (_index) => {
    setTabCurrent(_index);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">Formacion</h2>
      <span className="section__subtitle">Mi viaje personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* <div className="qualification__button qualification__active button--flex"> */}
          <div
            className={
              tabCurrent === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => setTabCurrent(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educacion
          </div>

          <div
            className={
              tabCurrent === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => setTabCurrent(2)}
          >
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          {/* <div className="qualification__content qualification__content-active"> */}
          <div
            className={
              tabCurrent === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__data__content">
                <h3 className="qualification__title">Ingenieria de sistemas</h3>

                <span className="qualification__subtitle">
                  <a
                    href="https://www.portalunimar.unimar.edu.ve"
                    target="_target"
                    className="qualification__link"
                  >
                    UNIMAR - Venezuela
                  </a>
                </span>

                <div className="qualification__calender">
                  <BsFillCalendarFill /> 2018 - Presente
                </div>
              </div>

              <div className="qualification__indicator">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__void"></div>
            </div>
          </div>

          <div
            className={
              tabCurrent === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__data__content">
                <h3 className="qualification__title">Programador Frontend</h3>

                <span className="qualification__subtitle">
                  <a
                    href="https://www.grupospartan.com/"
                    target="_target"
                    className="qualification__link"
                  >
                     Spartan Techs S.A
                  </a>
                </span>

                <div className="qualification__calender">
                  <BsFillCalendarFill /> 2021 - Presente
                </div>
              </div>

              <div className="qualification__indicator">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__void"></div>
            </div>

            <div className="qualification__data">
              <div className="qualification__data__content">
                <h3 className="qualification__title">
                  Programador Jr Frontend
                </h3>

                <span className="qualification__subtitle">BeeLettrs S.A</span>

                <div className="qualification__calender">
                  <BsFillCalendarFill /> 2019 - 2021
                </div>
              </div>

              <div className="qualification__indicator">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__void"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

/* 
<div className="qualification__data">
<div></div>
<div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
</div>

<div>
  <h3 className="qualification__title">Product Desingner</h3>

  <span className="qualification__subtitle">
    Microsoft - Spain
  </span>

  <div className="qualification__calender">
    <i className="uil uil-calendar-alt"></i> 2021 - Present
  </div>
</div>
</div>

<div className="qualification__data">
<div>
  <h3 className="qualification__title">UX Desingner</h3>

  <span className="qualification__subtitle">
    Apple Inc - Spain
  </span>

  <div className="qualification__calender">
    <i className="uil uil-calendar-alt"></i> 2020 - 2021
  </div>
</div>

<div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
</div>
</div>

<div className="qualification__data">
<div></div>
<div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
</div>

<div>
  <h3 className="qualification__title">Web Desingner</h3>

  <span className="qualification__subtitle">Figma - Spain</span>

  <div className="qualification__calender">
    <i className="uil uil-calendar-alt"></i> 2018 - 2021
  </div>
</div>
</div>
*/
