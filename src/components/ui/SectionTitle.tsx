"use client";

import {motion} from "framer-motion";
import React from "react";

type SectionProps = {
  title: string;
  textClass?: string;
};

function SectionTitle({textClass = "mb-10 font-bold text-2xl uppercase text-center", title}: SectionProps) {
  return (
    <motion.h2
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      className={textClass}
    >
      {title}
    </motion.h2>
  );
}

export default SectionTitle;
