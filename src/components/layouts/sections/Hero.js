"use client";
import ContactsList from "@/components/navigation/ContactsList";
import Description from "@/components/ui/Description";
import HighLightText from "@/components/ui/HighLightText";
import {heroText} from "@/data/aboutData";
import {useTheme} from "next-themes";
import Image from "next/image";
import React from "react";
import {contactsData} from "@/data/contactsData";
import DownloadFile from "@/components/navigation/DownloadFile";
import {motion} from "framer-motion";

function Hero() {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col gap-20 justify-center items-center lg:flex-row lg:justify-between">
      <motion.div
        initial={{opacity: 0, x: -300}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.4}}
      >
        <Image
          className={`rounded-full lg:w-[120%] ${
            theme === "dark"
              ? "border-4 border-headerDark"
              : "border-4 border-headerLight"
          }`}
          src="/me.webp"
          width={700}
          height={700}
          alt="herman"
          priority
        />
      </motion.div>
      <motion.div
        initial={{opacity: 0, x: 300}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.4}}
        className="flex flex-col gap-4"
      >
        <HighLightText
          titleClass="text-4xl font-bold capitalize"
          subTitleClass="text-2xl capitalize"
          title={"Hey, I'm Heri Hermansyah"}
          subTitle={"frontend web developer"}
          titleMotion={{
            initial: {opacity: 0, y: 50},
            animate: {opacity: 1, y: 0},
            transition: {duration: 1},
          }}
          subTitleMotion={{
            initial: {opacity: 0},
            animate: {opacity: 1},
            transition: {duration: 0.8, delay: 0.3},
          }}
        />
        <motion.div
          initial={{opacity: 0, y: 200, scale: 0.4}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.4, delay: 0.3}}
        >
          <Description>{heroText}</Description>
        </motion.div>
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.4, delay: 0.3}}
          className="flex flex-col gap-4 items-start md:flex-row md:justify-between md:items-center"
        >
          <ContactsList
            boxClass="flex gap-2"
            variant="contained"
            data={contactsData.filter((item) => [1, 2, 5].includes(item.id))}
          />
          <DownloadFile
            name={"download cv"}
            variant="contained"
            file="/resume.pdf"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
