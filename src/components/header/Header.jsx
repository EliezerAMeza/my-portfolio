import React, { useContext, useEffect, useState } from "react";

// ?-- context
import { GeneralContext } from "../../context/generalContext";

// ?-- icons
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

  const { scrollTo } = useContext(GeneralContext);

  function scrollToSection(_id) {
    const sectionOffsetTop = document.querySelector(_id).offsetTop;
    setSectionCurrent(_id);

    scrollTo(sectionOffsetTop);
  }

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
                // href="#home"
                className={
                  sectionCurrent === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => scrollToSection("#home")}
              >
                <IoHome className="nav__icon" /> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a
                // href="#qualification"
                className={
                  sectionCurrent === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => scrollToSection("#qualification")}
              >
                <FaGraduationCap className="nav__icon" /> Formacion
              </a>
            </li>

            <li className="nav__item">
              <a
                // href="#skills"
                className={
                  sectionCurrent === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => scrollToSection("#skills")}
              >
                <FaCode className="nav__icon" /> Conocimientos
              </a>
            </li>

            <li className="nav__item">
              <a
                // href="#about"
                className={
                  sectionCurrent === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => scrollToSection("#about")}
              >
                <FaUserAlt className="nav__icon" /> Sobre mi
              </a>
            </li>

            <li className="nav__item">
              <a
                // href="#contact"
                className={
                  sectionCurrent === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => scrollToSection("#contact")}
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
