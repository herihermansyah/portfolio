"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SkillsCard from "@/components/ui/SkillsCard";
import {skillsData} from "@/data/skillsData";
import React from "react";
import {motion} from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: "easeOut"}}
      viewport={{amount: 0.3}}
      id="skills"
    >
      <SectionTitle title={"skills"} />
      <motion.div
        initial={{opacity: 0, y: -400}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4}}
      >
        <div>
          <SkillsCard skills={skillsData} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
