import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MenuFooter = () => {
  const listMenu = [
    { name: "Home", path: "#home" },
    { name: "Skills", path: "#skills" },
    { name: "portfolio", path: "#portfolio" },
    { name: "contact", path: "#contact" },
    { name: "About", path: "#about" },
  ];
  return (
    <div className="flex justify-between items-center relative">
      <nav aria-label="main navigation">
        <ul className="flex flex-row gap-4 md:flex-col xl:flex-row">
          {listMenu.map((menu, index) => (
            <li key={index}>
              <a
                className=" hover:border-b-hover hover:border-b-4 transition-all ease-in-out duration-75 "
                href={menu.path}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuFooter;
