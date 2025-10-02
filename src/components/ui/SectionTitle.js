"use client";

import {motion} from "framer-motion";
import React from "react";

function SectionTitle({textClass = "", title}) {
  return (
    <motion.h2
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      className={`font-bold text-2xl uppercase text-center mb-10 ${textClass}`}
    >
      {title}
    </motion.h2>
  );
}

export default SectionTitle;
