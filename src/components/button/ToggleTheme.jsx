import {IconButton} from "@mui/material";
import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

function ToggleTheme() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <IconButton sx={{color: "yellow"}} onClick={toggleTheme}>
        {theme === "light" ? <NightlightIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
}

export default ToggleTheme;
