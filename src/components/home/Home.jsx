import React, { useEffect } from "react";

import Social from "./Social";
import Data from "./Data";

import "./Home.css";

function Home() {
  useEffect(() => {
    const profile = document.querySelector(".home__img");
    profile.classList.add("profile__entrance");

    setTimeout(() => {
      profile.classList.remove("profile__entrance");
      profile.classList.add("profile__animate");
    }, 5000);
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
