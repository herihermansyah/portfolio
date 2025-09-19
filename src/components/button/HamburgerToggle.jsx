import {Button} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function HamburgerToggle({click, onclick}) {
  return (
    <div className="block md:hidden">
      <Button sx={{color: "black"}} onClick={onclick}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </div>
  );
}

export default HamburgerToggle;
