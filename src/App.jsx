import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// ? COMPONENTS
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

// ? FLOATS
import ScrollUp from "./components/scrollUp/ScrollUp";
import Cursor from "./components/cursor/Cursor";

import "./_variables.css";
import "./_global.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> home</Link>
        <Link to="/skills"> skills</Link>
        <Link to="/qualification"> qualification</Link>
        <Link to="/contact"> contact</Link>
        <Link to="/about"> about</Link>
        <Link to="/projects"> projects</Link>
      </header>

<Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/Skills">
        <Skills />
      </Route>
      <Route path="/Qualification">
        <Qualification />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Projects">
        <Projects />
      </Route>
      </Switch>
    </BrowserRouter>

    // <div className="container-all" id="container-all">
    //   <Header />

    //   <main className="main">
    //     <Home />
    //     <Qualification />
    //     <Skills />
    //     <About />
    //     <Projects />

    //     {/* <Testimonials /> */}

    //     <Contact />
    //   </main>

    //   <Footer />

    //   <Cursor />
    //   <ScrollUp />
    // </div>
  );
}

export default App;
