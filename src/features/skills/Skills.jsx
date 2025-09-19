import React from "react";
import GroupCard from "../../components/card/GroupCard";
import {skillsData} from "../../data/skillsData";
import SubTitle from "../../components/title/SubTitle";
import LanguageCharts from "../../components/charts/LanguageCharts";
import DesignCharts from "../../components/charts/DesignCharts";
function Skills() {
  return (
    <div id="skills" className="container mx-auto px-4 md:px-0">
      <div>
        <SubTitle SubTitle={"skills"} className="my-10 text-center" />
        <GroupCard skillsData={skillsData} />
      </div>
      <div>
        <SubTitle SubTitle={"Proficiency"} className="my-10 text-center " />
        <div className="flex flex-col gap-6 lg:flex-row">
          <LanguageCharts />
          <DesignCharts />
        </div>
      </div>
    </div>
  );
}

export default Skills;
