import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [SCREEN_WIDTH, setWidth] = useState(window.innerWidth);
  const [SCREEN_HEIGHT, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { SCREEN_WIDTH, SCREEN_HEIGHT };
};

export default useScreenSize;
