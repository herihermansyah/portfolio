import {RiHome5Fill} from "react-icons/ri";
import {GiSkills} from "react-icons/gi";
import {GrTasks} from "react-icons/gr";
import {FaMehBlank} from "react-icons/fa";
import {MdContactEmergency} from "react-icons/md";
import React from "react";

export type MenuItem = {
  id: number;
  title: string;
  path: string;
  icon: React.ElementType;
};

export const menuData: MenuItem[] = [
  {id: 1, title: "home", path: "#home", icon: RiHome5Fill},
  {id: 2, title: "skills", path: "#skills", icon: GiSkills},
  {id: 3, title: "portfolio", path: "#portfolio", icon: GrTasks},
  {id: 4, title: "contact", path: "#contact", icon: MdContactEmergency},
  {id: 5, title: "about", path: "#about", icon: FaMehBlank},
];
