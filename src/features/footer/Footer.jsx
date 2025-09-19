import React, {useContext} from "react";
import ButtonContact from "../../components/button/ButtonContact";
import {contactData} from "../../data/contactData";
import MenuList from "../../components/menuNav/MenuList";
import menuData from "../../data/menuData";
import {ThemeContext} from "../../context/ThemeProvider";
import Logo from "../../components/logo/Logo";

function Footer() {
  const {theme} = useContext(ThemeContext);
  return (
    <div
      className={` mt-20 ${theme === "light" ? "bg-footerLight" : "bg-footerDark"}`}
    >
      <div className="container mx-auto p-4 flex flex-col gap-8">
        <div className="flex items-center gap-20 justify-center">
          <div className="hidden md:flex md:flex-col md:items-center">
            <Logo logoText={"Heri Hermansyah"} />
            <MenuList data={menuData} />
          </div>
          <div>
            <ButtonContact contactData={contactData} />
          </div>
        </div>
        <p className="text-center">
          © 2025 Heri Hermansyah. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
