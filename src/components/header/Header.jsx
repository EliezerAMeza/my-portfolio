import React, { useEffect, useState } from "react";

import { IoHome } from "react-icons/io5";

import { FaGraduationCap, FaUserAlt, FaCode } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "./Header.css";

function Header() {
  // ? -- scroll level current
  const [scrollLevel, setScrollLevel] = useState(0);

  // ?-- to block scroll animation
  const [scrollController, setScrollController] = useState(false);

  // ?-- section current
  const [sectionCurrent, setSectionCurrent] = useState("#home");

  // ?-- show header menu
  const [showMenu, setShowMenu] = useState(false);

  // ?-- change header height
  useEffect(() => {

    const header = document.querySelector(".header");

    header.classList.remove("scroll-header");


      //  if (currentScroll >= 200) {
      //    header.classList.add("scroll-header");
      //  } else {
      //  }


  //   const overview = document.getElementById("container-all");

  //   overview.addEventListener("scroll", function (e) {
  //     const totalScroll = overview.scrollHeight - overview.clientHeight;
  //     const currentScroll = overview.scrollTop;

  //     // ?-- save scroll level
  //     setScrollLevel(currentScroll);

  //     const header = document.querySelector(".header");

  //     if (currentScroll >= 200) {
  //       header.classList.add("scroll-header");
  //     } else {
  //       header.classList.remove("scroll-header");
  //     }
  //   });
  }, []);

  function scrollToSection(_id) {
    if (scrollController == true) {
      console.log("block");
      return;
    }

    setScrollController(true);

    const overview = document.getElementById("container-all");
    const section = document.querySelector(_id);
    const sectionScrollLevel = section.offsetTop;
    const currentScroll = scrollLevel;

    if (currentScroll < sectionScrollLevel) {
      scrollToBotton(sectionScrollLevel);
    } else {
      scrollToTop(sectionScrollLevel);
    }

    function scrollToBotton(_scrollLevel) {
      const currentScroll = overview.scrollTop;

      overview.scrollTop += 15;

      if (currentScroll >= _scrollLevel) {
        setScrollController(false);
        return;
      }

      setTimeout(() => {
        scrollToBotton(_scrollLevel);
      }, 1);
    }

    function scrollToTop(_scrollLevel) {
      const currentScroll = overview.scrollTop;

      overview.scrollTop -= 15;

      if (currentScroll <= _scrollLevel) {
        setScrollController(false);
        return;
      }

      setTimeout(() => {
        scrollToTop(_scrollLevel);
      }, 1);
    }
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
