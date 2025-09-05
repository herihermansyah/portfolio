import React from "react";
import LanguageSkills from "./LanguageSkills";
import DesignSkills from "./DesignSkills";

const CartsSkills = () => {
  return (
    <div>
      <h2 className="text-center text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-bold mb-20">
        Proficiency
      </h2>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <LanguageSkills />
        <DesignSkills />
      </div>
    </div>
  );
};

export default CartsSkills;
