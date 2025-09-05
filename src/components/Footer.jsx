import React from "react";
import ContactList from "../features /contact/ContactList";
import Logo from "../features /navigation/Logo";
import MenuFooter from "../features /navigation/MenuFooter";

const Footer = () => {
  return (
    <div className="bg-footer text-white">
      <div className="container mx-auto p-4 flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-30">
          <div className="flex flex-col items-center gap-4">
            <Logo />
            <MenuFooter />
          </div>
          <ContactList />
        </div>
        <div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Heri Hermansyah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
