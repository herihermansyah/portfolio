"use client";

import {motion} from "framer-motion";
import Description from "@/components/ui/Description";
import SectionTitle from "@/components/ui/SectionTitle";
import {aboutText} from "@/data/aboutData";
import React from "react";

function About() {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{amount: 0.3}}
      id="about"
    >
      <SectionTitle title={"about me"} />
      <Description articleClass="flex flex-col gap-6" parafClass="md:text-2xl">
        {aboutText}
      </Description>
    </motion.div>
  );
}

export default About;
