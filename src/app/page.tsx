"use client";

import Hero from "@/components/layouts/sections/Hero";
import Portfolio from "@/components/layouts/sections/Portfolio";
import Skills from "@/components/layouts/sections/Skills";
import Contacts from "@/components/layouts/sections/Contacts";
import React from "react";
import About from "@/components/layouts/sections/About";

function page() {
  return (
    <div
      className="container mx-auto px-4 md:px-0 mt-2 md:mt-6
                    flex flex-col gap-20
    "
    >
      <Hero />
      <Skills />
      <Portfolio />
      <Contacts />
      <About />
    </div>
  );
}

export default page;
