"use client";
import {motion, MotionProps} from "framer-motion";
import React from "react";
import TypingText from "./TypingText";

type TextProps = {
  title: string;
  subTitle?: string;
  className?: string;
  titleClass?: string;
  subTitleClass?: string;
  titleMotion?: MotionProps;
  subTitleMotion?: MotionProps;
};

function HighLightText({
  title,
  subTitle,
  className = "",
  titleClass = "",
  subTitleClass = "",
  titleMotion = {initial: {opacity: 0}, animate: {opacity: 1}},
  subTitleMotion = {initial: {opacity: 0}, animate: {opacity: 1}},
}: TextProps) {
  return (
    <div className={className}>
      <motion.h2 {...titleMotion} className={titleClass}>
        <TypingText text={title} />
      </motion.h2>
      {subTitle && (
        <motion.h3 {...subTitleMotion} className={subTitleClass}>
          <TypingText text={subTitle} />
        </motion.h3>
      )}
    </div>
  );
}

export default HighLightText;
