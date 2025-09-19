import React, {useContext} from "react";
import Header from "../features/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../features/footer/Footer";
import MenuList from "../components/menuNav/MenuList";
import menuData from "../data/menuData";
import {ThemeContext} from "../context/ThemeProvider";

function Frame() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`sticky top-0 z-50 ${
          theme === "light" ? "bg-headerLight" : "bg-headerDark"
        }`}
      >
        <Header />
      </div>
      <main className="flex-grow">
        <Outlet />
        <Footer />
      </main>
      <div
        className={`md:hidden sticky bottom-0 z-40 ${
          theme === "light" ? "bg-footerLight" : "bg-footerDark"
        } `}
      >
        <MenuList data={menuData} />
      </div>
    </div>
  );
}

export default Frame;
