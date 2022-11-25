import React, { useEffect, useState } from "react";

import "./Header.css";

function Header() {
  // ?-- show header menu
  const [showMenu, setShowMenu] = useState(false);

  // ?-- change backgroud header

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
          EMZ | Eliezer A Meza
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Acerca de mi
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Conocimientos
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Servicios
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Mi trabajo
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contacto
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
