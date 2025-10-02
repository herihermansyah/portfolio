"use client";
import { motion } from "framer-motion";
import React from "react";
import TypingText from "./TypingText"; // pastikan import

function HighLightText({
  title,
  subTitle,
  className = "",
  titleClass = "",
  subTitleClass = "",
  titleMotion = { initial: { opacity: 0 }, animate: { opacity: 1 } },
  subTitleMotion = { initial: { opacity: 0 }, animate: { opacity: 1 } },
}) {
  return (
    <div className={`${className}`}>
      <motion.h2 {...titleMotion} className={`${titleClass}`}>
        <TypingText text={title} />
      </motion.h2>
      {subTitle && (
        <motion.h3 {...subTitleMotion} className={` ${subTitleClass}`}>
          <TypingText text={subTitle} />
        </motion.h3>
      )}
    </div>
  );
}

export default HighLightText;
