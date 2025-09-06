import React from "react";
import CardProject from "../features /portfolio/CardProject";

const Portofolio = () => {
  return (
    <div id="portfolio" className="container mx-auto px-4 md:px-0">
      <h2 className="text-center text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-bold mb-20">
        Portofolio
      </h2>
      <div>
        <CardProject />
      </div>
    </div>
  );
};

export default Portofolio;
