import React from "react";
import Hero from "../features/hero/Hero";
import Skills from "../features/skills/Skills";
import Portfolio from "../features/portfolio/Portfolio";
import Contact from "../features/contact/Contact";
import About from "../features/about/About";

function Main() {
  return (
    <div className="flex mt-4 flex-col gap-20">
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <About />
    </div>
  );
}

export default Main;
