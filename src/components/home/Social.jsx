import React from "react";

import { UilInstagram, UilLinkedinAlt } from "@iconscout/react-unicons";

function Social() {
  // return <div></div>

  return (
    <div className="home__social">
      <a href="#" className="home__social-icon" target="_blank">
        <UilInstagram />
      </a>

      <a href="#" className="home__social-icon" target="_blank">
        <UilLinkedinAlt />
      </a>

      {/* <a href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-dribbble"></i>
      </a>
      <a href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a> */}
    </div>
  );
}

export default Social;
