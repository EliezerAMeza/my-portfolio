import React, { useState } from "react";

import "./Qualification.css";

function Qualification() {
  const [tabCurrent, setTabCurrent] = useState(2);

  const showTab = (_index) => {
    setTabCurrent(_index);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

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
            Education
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
            Experience
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
              <div>
                <h3 className="qualification__title">Web Desing</h3>

                <span className="qualification__subtitle">
                  Spain - Institute
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
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
                <h3 className="qualification__title">Art Director</h3>

                <span className="qualification__subtitle">
                  Spain - Institute
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>

                <span className="qualification__subtitle">
                  Spain - Institute
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
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
                <h3 className="qualification__title">UX Expert</h3>

                <span className="qualification__subtitle">
                  Spain - Institute
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
