import About from "@/components/layouts/sections/About";
import Contacts from "@/components/layouts/sections/Contacts";
import Hero from "@/components/layouts/sections/Hero";
import Portfolio from "@/components/layouts/sections/Portfolio";
import Skills from "@/components/layouts/sections/Skills";
import React from "react";

function page() {
  return (
    <div className="mt-2 md:mt-10 container mx-auto px-4 md:px-0 ">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Portfolio />
        <Contacts />
        <About />
      </div>
    </div>
  );
}

export default page;
