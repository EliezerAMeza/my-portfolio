import React, { useEffect, useState } from "react";

import { createContext } from "react";

import useScreenSize from "../Hooks/useScreenSize.jsx";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {

  // ?-- cursor circle 
  

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

  return (
    <GeneralContext.Provider value={{ useScreenSize, scrollTo }}>
      {children}
    </GeneralContext.Provider>
  );
}
