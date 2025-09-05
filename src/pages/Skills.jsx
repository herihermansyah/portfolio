import React from "react";
import CardList from "../features /skills/skills-name/CardList";
import CartsSkill from "../features /skills/Proficiency/CartsSkills";

const Skills = () => {
  return (
    <div id="skills" className=" px-4 md:px-0 bg-background-2 py-15">
      <h2 className="text-center text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-bold mb-20">
        Skills
      </h2>
      <div className="flex flex-col gap-30 container mx-auto">
        <CardList />
        <CartsSkill />
      </div>
    </div>
  );
};

export default Skills;
