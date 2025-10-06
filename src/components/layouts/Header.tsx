import React from "react";
import MenuList from "../navigation/MenuList";
import {menuData} from "@/data/menu";
import Logo from "../ui/Logo";
import SwitcherTheme from "../ui/SwticherTheme";

function Header() {
  return (
    <div className="container mx-auto px-4 md:px-0 py-4 flex items-center justify-center md:justify-between">
      <Logo
        logoText={"hermansyah"}
        textClass="uppercase font-bold text-2xl text-white sm:text-xl"
      />
      <MenuList
        data={menuData}
        title={(item) => item.title}
        titleClass="uppercase"
        path={(item) => item.path}
        ulClass="hidden text-white md:flex md:items-center md:gap-6"
      >
        <SwitcherTheme />
      </MenuList>
      <SwitcherTheme themeClass="fixed right-4 md:hidden" />
    </div>
  );
}

export default Header;
