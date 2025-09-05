import React from "react";
import MenuNav from "./MenuNav";
import Logo from "./Logo";

const Menu = () => {
  return (
    <div
      className="flex text-[1.25rem] items-center container mx-auto py-4 px-4 justify-between
    md:text-[1.75rem] md:justify-center md:px-0 
    xl:text-[1.25rem]  xl:justify-between "
    >
      <Logo />
      <MenuNav />
    </div>
  );
};

export default Menu;
