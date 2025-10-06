"use client";
import {motion} from "framer-motion";
import React, {useState, useEffect} from "react";

export type TypingProps = {
  text: string;
  className?: string;
};

function TypingText({text, className}: TypingProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const typingSpeed = 200;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 10000;
  const pauseBeforeType = 500;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setLoop(loop + 1);
      }, pauseBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loop, text]);

  return (
    <motion.span
      className={className}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.3}}
    >
      {displayText}
      <motion.span
        className="text-blue-800"
        animate={{opacity: [0, 1, 0]}}
        transition={{duration: 1, repeat: Infinity}}
      >
        |
      </motion.span>
    </motion.span>
  );
}

export default TypingText;
