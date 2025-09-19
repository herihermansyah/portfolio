import {Button} from "@mui/material";
import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider";

function ButtonContact({contactData}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-2 gap-4">
      {contactData.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button
            variant={theme === "light" ? "contained" : "outlined"}
            key={index}
            href={item.link}
            startIcon={<Icon />}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}

export default ButtonContact;
