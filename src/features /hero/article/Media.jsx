import { Button, IconButton } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Media = () => {
  return (
    <div className="flex gap-4 justify-between items-center">
      <div>
        <IconButton href="https://github.com/HeriHermansyah" target="blank">
          <GitHubIcon sx={{ color: "black", fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/heri-hermansyah/"
          target="blank"
        >
          <LinkedInIcon sx={{ color: "black", fontSize: "2rem" }} />
        </IconButton>
        <IconButton href="https://x.com/petanikeju" target="blank">
          <XIcon sx={{ color: "black", fontSize: "2rem" }} />
        </IconButton>
      </div>
      <div>
        <Button
          component="a"
          href="/cv.pdf"
          download={true}
          variant="contained"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Media;
