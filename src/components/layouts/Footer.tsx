import React from "react";
import ContactsList from "../navigation/ContactsList";
import {contacts} from "@/data/contacts";
import MenuList from "../navigation/MenuList";
import {menuData} from "@/data/menu";
import Logo from "../ui/Logo";

function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-0 py-4 mt-10 ">
      <div className="flex justify-center md:gap-30">
        <div>
          <Logo
            logoText={"heri hermansyah"}
            textClass="uppercase text-2xl text-white"
            className="flex-col items-center hidden md:flex"
          />
          <MenuList
            data={menuData}
            path={(item) => item.path}
            title={(item) => item.title}
            titleClass="uppercase"
            ulClass="items-center gap-4 hidden md:flex text-white"
          />
        </div>
        <div>
          <ContactsList
            data={contacts}
            boxClass="grid grid-cols-2 gap-2"
            variant="contained"
          />
        </div>
      </div>
      <p className="text-center mt-4 text-white">
        © 2025 Heri Hermansyah. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
