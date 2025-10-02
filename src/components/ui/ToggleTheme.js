"use client";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {IconButton} from "@mui/material";
import {RiMoonClearFill} from "react-icons/ri";
import {BsSunFill} from "react-icons/bs";

function ToggleTheme({themeClass}) {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`${themeClass}`}>
      <IconButton sx={{color: "yellow"}} onClick={handleTheme}>
        {theme === "light" ? <RiMoonClearFill /> : <BsSunFill />}
      </IconButton>
    </div>
  );
}

export default ToggleTheme;
