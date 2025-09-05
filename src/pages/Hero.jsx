import React from "react";
import HeroImage from "../features /hero/HeroImage";
import Discover from "../features /hero/Discover";

const Hero = () => {
  return (
    <div
      className="flex flex-col container mx-auto px-4 md:px-0
    xl:justify-between xl:gap-10 gap-6 xl:flex-row xl:items-center"
    >
      <HeroImage />
      <Discover />
    </div>
  );
};

export default Hero;
