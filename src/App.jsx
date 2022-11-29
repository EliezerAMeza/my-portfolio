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
    <div className="container-all" id="container-all">
      <Header />

      <main className="main">
        <Home />
        <Qualification />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <Cursor />
      <ScrollUp />
    </div>
  );
}

export default App;
