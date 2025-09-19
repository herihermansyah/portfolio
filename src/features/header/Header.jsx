import React from "react";
import Logo from "../../components/logo/Logo";
import ToggleTheme from "../../components/button/ToggleTheme";
import MenuList from "../../components/menuNav/MenuList";
import menuData from "../../data/menuData";

function Header() {
  return (
    <div
      className="container mx-auto flex justify-center items-center p-4
    md:p-0 md:py-4 md:justify-between"
    >
      <div>
        <Logo logoText={"heri hermansyah"} />
      </div>
      <div className="hidden md:flex">
        <MenuList data={menuData} />
        <ToggleTheme />
      </div>
      <div className="block md:hidden fixed right-2">
        <ToggleTheme />
      </div>
    </div>
  );
}

export default Header;
