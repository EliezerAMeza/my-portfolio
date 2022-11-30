import React from "react";

import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

function Social() {
  return (
    <div className="home__social">
      <a href="#" className="home__social-icon" target="_blank">
        <GrInstagram />
      </a>

      <a href="#" className="home__social-icon" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
}

export default Social;
