"use client";

import ContactsList from "@/components/navigation/ContactsList";
import Description from "@/components/ui/Description";
import HighLightText from "@/components/ui/HightLightText";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillsCard from "@/components/ui/SkillsCard";
import {heroText} from "@/data/about";
import {contacts} from "@/data/contacts";
import {useTheme} from "next-themes";
import Image from "next/image";
import React from "react";
import {skillsData} from "@/data/skills";
import DownloadFile from "@/components/navigation/DownloadFile";
import {motion} from "framer-motion";

function Hero() {
  const {theme} = useTheme();

  return (
    <div
      className="flex flex-col gap-10 items-center justify-center 
        lg:flex-row lg:items-start lg:justify-between"
    >
      {/* image */}
      <motion.div
        initial={{x: -100}}
        animate={{x: 0}}
        transition={{duration: 0.2}}
        className="flex justify-center lg:justify-start lg:flex-2"
      >
        <Image
          src="/avatarweb.webp"
          alt="foto heri hermansyah"
          width={1800}
          height={2640}
          className="rounded-4xl w-[90%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:max-w-[90%] shadow-xl/30"
        />
      </motion.div>

      {/* discover */}

      <div
        className="flex flex-col
                        md:flex-row gap-10 md:gap-4 lg:gap-15 lg:flex-col lg:flex-1 xl:flex-3"
      >
        {/* hero text */}
        <motion.div
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.2}}
          className={`flex flex-col gap-4 p-4 rounded-xl shadow-xl/30 ${
            theme === "light" ? "bg-optionLight" : "bg-optionDark"
          }`}
        >
          <HighLightText
            title="hello, i'm heri hermansyah"
            titleClass="capitalize text-2xl font-bold "
            subTitle="frontend web developer"
            subTitleClass="capitalize text-xl font-bold "
          />
          <hr />
          <Description>{heroText}</Description>
          <DownloadFile
            file="/resume.pdf"
            name="download cv"
            variant="contained"
          />
        </motion.div>
        {/* contact and skills */}
        <motion.div
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.2, delay: 0.2}}
          className="flex flex-col gap-15"
        >
          <div className="flex flex-col gap-2">
            <SectionTitle
              title="get in touch"
              textClass="mb-0 uppercase font-bold"
            />
            <ContactsList
              boxClass="flex gap-2"
              data={contacts.filter((item) => [1, 3, 5].includes(item.id))}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <SectionTitle title="skills" textClass="mb-0 uppercase font-bold" />
            <SkillsCard
              skills={skillsData.filter((item) =>
                ["Frontend Library", "Styling"].includes(item.category)
              )}
              title={(item) => item.title}
              icon={(item) => {
                const Icon = item.icon;
                return <Icon />;
              }}
              showCategory
              iconClass="text-white text-4xl md:text-2xl lg:text-4xl"
              titleClass="text-white md:text-[10px] lg:text-[16px] uppercase whitespace-nowrap"
              boxClass="flex gap-4 items-center"
              boxClass3="flex gap-8 p-4 shadow-xl/30 rounded-xl"
              boxClass4="flex flex-col gap-2 items-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
