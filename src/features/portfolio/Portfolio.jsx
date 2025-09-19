import React from "react";
import SubTitle from "../../components/title/SubTitle";
import PortfolioCard from "../../components/card/PortfolioCard";
import {projectsData} from "../../data/projectsData";

function Portfolio() {
  return (
    <div id="portfolio" className="container mx-auto px-4 md:px-0">
      <SubTitle SubTitle={"Portfolio"} className="text-center my-10" />
      <PortfolioCard projectsData={projectsData} />
    </div>
  );
}

export default Portfolio;
