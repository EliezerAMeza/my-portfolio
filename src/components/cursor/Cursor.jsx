import React, { useContext, useEffect } from "react";

import { GeneralContext } from "../../context/generalContext";

import "./Cursor.css";

function Cursor() {
  const { useScreenSize } = useContext(GeneralContext);
  const { SCREEN_WIDTH } = useScreenSize();

  useEffect(() => {
    if (SCREEN_WIDTH <= 768) return;

    const header = document.querySelector(".header");

    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector("#cursor");

      const positionX = e.pageX - 10;
      const positionY = e.pageY - 10;

      cursor.style = `transform: translate3d(${positionX}px, ${positionY}px, 0px)`;

      // ?-- show header
      if (positionY >= 50) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }

      // cursor.style.transform = `translate3d(${positionX}px, ${positionY}px, 0px)`;
    });
  }, []);

  return <span className="cursor" id="cursor"></span>;
}

export default Cursor;
