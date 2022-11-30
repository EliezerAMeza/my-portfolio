import React, { useEffect } from "react";

import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

import "./Footer.css";

function Footer() {
  useEffect(() => {
    const overview = document.getElementById("container-all");

    overview.addEventListener("scroll", function (e) {
      const footer = document.querySelector(".footer");

      const totalScroll = overview.scrollHeight - overview.clientHeight;
      const currentScroll = overview.scrollTop;

      if (currentScroll >= totalScroll) {
        footer.classList.add("scroll-footer");
      }
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <i>EMZ</i> | Eliezer A Meza
        </h1>
        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul> */}
        <div className="footer__social">
          <a href="#" className="footer__social-link" target="_blank">
            <GrInstagram />
          </a>
          <a href="#" className="footer__social-link" target="_blank">
            <BsLinkedin />
          </a>
        </div>
        <div className="footer__copy">
          &copy; _________ | All rigths reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
