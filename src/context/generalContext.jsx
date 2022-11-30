import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { IoLogoHackernews } from "react-icons/io5";

import useScreenSize from "../Hooks/useScreenSize.jsx";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  let currentScroll = 0;

  // ?-- to block scroll animation
  const [scrollController, setScrollController] = useState(false);

  function scrollTo(_scrollTo) {
    const overview = document.getElementById("container-all");
    let currentScroll = document.getElementById("container-all").scrollTop;

    if (currentScroll > _scrollTo) {
      console.log("hay que bajar");
      scrollToTop(_scrollTo);
    } else {
      console.log("hay que subir");
      scrollToBotton(_scrollTo);
    }

    function scrollToBotton(_scrollLevel) {
      if (currentScroll >= _scrollLevel) {
        return;
      }

      overview.scrollTop += 15;
      currentScroll += 15;

      setTimeout(() => {
        scrollToBotton(_scrollLevel);
      }, 1);
    }

    function scrollToTop(_scrollLevel) {
      if (currentScroll <= _scrollLevel) {
        return;
      }

      overview.scrollTop -= 15;
      currentScroll -= 15;

      setTimeout(() => {
        scrollToTop(_scrollLevel);
      }, 1);
    }
  }

  function showHeader(_state) {
    const header = document.querySelector(".header");

    if (_state == true) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }

  useEffect(() => {
    const overview = document.getElementById("container-all");

    overview.addEventListener("scroll", (e) => {
      if (overview.scrollTop < currentScroll) {
        setTimeout(() => {
          showHeader(true);
        }, 500);
      } else {
        showHeader(false);
      }

      currentScroll = overview.scrollTop;
    });
  }, []);

  return (
    <GeneralContext.Provider value={{ useScreenSize, showHeader, scrollTo }}>
      {children}
    </GeneralContext.Provider>
  );
}
