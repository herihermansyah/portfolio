import {FaHtml5} from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {FaJs} from "react-icons/fa";

import {RiTailwindCssFill} from "react-icons/ri";
import {SiMui} from "react-icons/si";

import {FaReact} from "react-icons/fa";
import {SiAxios} from "react-icons/si";

import {FaGithub} from "react-icons/fa";
import {VscVscode} from "react-icons/vsc";
import {SiOpenai} from "react-icons/si";
import {SiGooglegemini} from "react-icons/si";

import {SiAdobephotoshop} from "react-icons/si";
import {SiAdobepremierepro} from "react-icons/si";
import {SiAdobeaftereffects} from "react-icons/si";

export const skillsData = [
  {
    category: "Languages",
    items: [
      {id: 1, name: "html", icon: FaHtml5},
      {id: 2, name: "css", icon: IoLogoCss3},
      {id: 3, name: "java script", icon: FaJs},
    ],
  },
  {
    category: "Styling",
    items: [
      {id: 1, name: "tailwindcss", icon: RiTailwindCssFill},
      {id: 2, name: "material UI", icon: SiMui},
    ],
  },
  {
    category: "Frontend Library",
    items: [
      {id: 1, name: "react", icon: FaReact},
      {id: 2, name: "axios", icon: SiAxios},
    ],
  },
  {
    category: "Media Tools",
    items: [
      {id: 1, name: "photoshop", icon: SiAdobephotoshop},
      {id: 2, name: "premiere", icon: SiAdobepremierepro},
      {id: 3, name: "effect", icon: SiAdobeaftereffects},
    ],
  },
  {
    category: "Development Tools",
    items: [
      {id: 1, name: "github", icon: FaGithub},
      {id: 2, name: "Vscode", icon: VscVscode},
      {id: 3, name: "open AI", icon: SiOpenai},
      {id: 4, name: "gemini", icon: SiGooglegemini},
    ],
  },
];
