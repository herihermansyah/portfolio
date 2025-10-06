"use client";
import {FaHtml5} from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {FaJs} from "react-icons/fa";

import {RiTailwindCssFill} from "react-icons/ri";
import {SiMui} from "react-icons/si";

import {FaReact} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";

import {SiAxios} from "react-icons/si";

import {FaGithub} from "react-icons/fa";
import {VscVscode} from "react-icons/vsc";
import {SiOpenai} from "react-icons/si";
import {SiGooglegemini} from "react-icons/si";

import {SiAdobephotoshop} from "react-icons/si";
import {SiAdobepremierepro} from "react-icons/si";
import {SiAdobeaftereffects} from "react-icons/si";

export type ItemType = {
  id: number;
  title: string;
  icon: React.ElementType;
};

export type CategoryType = {
  category: string;
  items: ItemType[];
};

export type SkillsType = CategoryType[];

export const skillsData: SkillsType = [
  {
    category: "Languages",
    items: [
      {id: 1, title: "html", icon: FaHtml5},
      {id: 2, title: "css", icon: IoLogoCss3},
      {id: 3, title: "java script", icon: FaJs},
    ],
  },
  {
    category: "Styling",
    items: [
      {id: 1, title: "tailwindcss", icon: RiTailwindCssFill},
      {id: 2, title: "material UI", icon: SiMui},
    ],
  },
  {
    category: "Frontend Library",
    items: [
      {id: 1, title: "react", icon: FaReact},
      {id: 2, title: "nextjs", icon: RiNextjsFill},
      {id: 3, title: "axios", icon: SiAxios},
    ],
  },
  {
    category: "Media Tools",
    items: [
      {id: 1, title: "photoshop", icon: SiAdobephotoshop},
      {id: 2, title: "premiere", icon: SiAdobepremierepro},
      {id: 3, title: "effect", icon: SiAdobeaftereffects},
    ],
  },
  {
    category: "Development Tools",
    items: [
      {id: 1, title: "github", icon: FaGithub},
      {id: 2, title: "Vscode", icon: VscVscode},
      {id: 3, title: "open AI", icon: SiOpenai},
      {id: 4, title: "gemini", icon: SiGooglegemini},
    ],
  },
];
