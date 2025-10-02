"use client";
import ProjectsCard from "@/components/ui/ProjectsCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {projectsData} from "@/data/projectsData";
import {motion} from "framer-motion";
import React from "react";

function Portfolio() {
  return (
    <motion.div
      layout
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{amount: 0.2}}
      id="portfolio"
    >
      <SectionTitle title={"portfolio"} />
      <div>
        <ProjectsCard data={projectsData} />
      </div>
    </motion.div>
  );
}

export default Portfolio;
