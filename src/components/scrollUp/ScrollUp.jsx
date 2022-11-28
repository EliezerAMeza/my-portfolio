import React, { useEffect } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

import "./ScrollUp.css";

function ScrollUp() {
  useEffect(() => {
    const overview = document.getElementById("container-all");

    overview.addEventListener("scroll", function (e) {
      const scrollUp = document.querySelector(".scrollUp");

      const totalScroll = overview.scrollHeight - overview.clientHeight;
      const currentScroll = overview.scrollTop;

      if (currentScroll >= 200) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    });
  }, []);

  const handleScrollUp = () => {
    const overview = document.getElementById("container-all");

    const scroll = overview.scrollTop;

    overview.scrollTop -= 15;

    if (overview.scrollTop <= 0) return;

    setTimeout(() => {
      handleScrollUp();
    }, 1);

  };

  return (
    <a className="scrollUp" onClick={() => handleScrollUp()}>
      <AiOutlineArrowUp />
    </a>
  );
}

export default ScrollUp;
