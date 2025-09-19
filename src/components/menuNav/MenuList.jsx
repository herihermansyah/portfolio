import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider";

function MenuList({data}) {
  const {theme} = useContext(ThemeContext);
  return (
    <nav className="p-2">
      <ul className="grid grid-cols-5 gap-10 md:flex md:items-center md:gap-4">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a
                href={item.path}
                className={`uppercase flex flex-col items-center text-white ${
                  theme === "light"
                    ? "hover:text-optionLight"
                    : "hover:text-optionDark"
                } `}
              >
                <span className="block md:hidden">
                  <Icon />
                </span>
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MenuList;
