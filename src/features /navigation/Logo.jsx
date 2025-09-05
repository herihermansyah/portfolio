import React from "react";
import logo from "../../assets/logo.webp";

const Logo = () => {
  return (
    <div className="md:hidden text-[1.75rem] xl:flex flex gap-4 items-center">
      <div>
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <h1>hermansyah</h1>
      </div>
    </div>
  );
};

export default Logo;
