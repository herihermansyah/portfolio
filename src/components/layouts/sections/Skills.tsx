"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillsCard from "@/components/ui/SkillsCard";
import React from "react";
import {skillsData} from "@/data/skills";
import {motion} from "framer-motion";

function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
      viewport={{amount: 0.2}}
    >
      <SectionTitle title="skills" />
      <motion.div initial={{y: 1000}} animate={{y: 0}}>
        <SkillsCard
          skills={skillsData}
          title={(item) => item.title}
          icon={(item) => {
            const Icon = item.icon;
            return <Icon />;
          }}
          showCategory
          iconClass="text-white text-4xl"
          titleClass="text-white uppercase"
          boxClass="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3"
          boxClass3="flex gap-10 p-4 rounded-2xl shadow-xl/30"
          boxClass4="flex flex-col items-start gap-2 "
        />
      </motion.div>
    </motion.div>
  );
}

export default Skills;
