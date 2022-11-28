import React, { useEffect, useState } from "react";

import { IoHome } from "react-icons/io5";

import { FaGraduationCap, FaUserAlt, FaCode } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "./Header.css";

function Header() {
  // ?-- section current
  const [sectionCurrent, setSectionCurrent] = useState("#home");

  // ?-- show header menu
  const [showMenu, setShowMenu] = useState(false);

  // ?-- change header height
  useEffect(() => {
    const overview = document.getElementById("container-all");

    overview.addEventListener("scroll", function (e) {
      const header = document.querySelector(".header");

      const totalScroll = overview.scrollHeight - overview.clientHeight;
      const currentScroll = overview.scrollTop;

      if (currentScroll >= 200) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    });
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <i>EMZ</i> | Eliezer A Meza
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              {/* <a href="#home" className="nav__link active-link"> */}
              <a
                href="#home"
                className={
                  sectionCurrent === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setSectionCurrent("#home")}
              >
                <IoHome className="nav__icon" /> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  sectionCurrent === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setSectionCurrent("#skills")}
              >
                <FaCode className="nav__icon" /> Conocimientos
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                className={
                  sectionCurrent === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setSectionCurrent("#qualification")}
              >
                <FaGraduationCap className="nav__icon" /> Formacion
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  sectionCurrent === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setSectionCurrent("#about")}
              >
                <FaUserAlt className="nav__icon" /> Sobre mi
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  sectionCurrent === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setSectionCurrent("#contact")}
              >
                <RiSendPlaneFill className="nav__icon" /> Contacto
              </a>
            </li>
          </ul>

          <IoClose className="nav__close" onClick={() => setShowMenu(false)} />
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
