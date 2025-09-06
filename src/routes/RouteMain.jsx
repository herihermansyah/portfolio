import React from "react";
import Hero from "../pages/Hero";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portofolio from "../pages/Portofolio";

const RouteMain = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-40 mt-8 mb-8 md:mb-20 md:mt-20">
      <Hero />
      <Skills />
      <Portofolio />
      <Contact />
      <About />
    </div>
  );
};

export default RouteMain;
