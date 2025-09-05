import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const MenuNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const listMenu = [
    { name: "Home", path: "#home" },
    { name: "Skills", path: "#skills" },
    { name: "portfolio", path: "#portfolio" },
    { name: "contact", path: "#contact" },
    { name: "About", path: "#about" },
  ];
  return (
    <div className="flex justify-between items-center relative">
      <nav
        aria-label="main navigation"
        className={`fixed top-16 right-0 h-screen overflow-hidden transition-transform ease-in-out duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:static md:top-0 md:translate-x-0 md:h-auto md:overflow-visible`}
      >
        <ul className="flex flex-col gap-8 bg-header p-6 h-full md:bg-transparent w-50 md:flex-row md:gap-8 md:p-0 md:h-auto md:w-auto">
          {listMenu.map((menu, index) => (
            <li key={index}>
              <a
                onClick={handleClick}
                className=" hover:border-b-hover hover:border-b-4 transition-all ease-in-out duration-75 "
                href={menu.path}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={handleClick}
        className="bg-option hover:bg-hover rounded-md md:hidden"
      >
        {open ? (
          <IconButton size="small" variant="contained">
            <CloseIcon sx={{ fontSize: "32px", color: "white" }} />
          </IconButton>
        ) : (
          <IconButton size="small" variant="contained">
            <MenuIcon sx={{ fontSize: "32px", color: "white" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default MenuNav;
