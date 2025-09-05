import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";

const ContactList = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outlined"
          href="https://github.com/HeriHermansyah"
          target="blank"
          startIcon={<GitHubIcon sx={{ fontSize: "2rem" }} />}
        >
          Github
        </Button>
        <Button
          variant="outlined"
          href="https://www.linkedin.com/in/heri-hermansyah/"
          target="blank"
          startIcon={<LinkedInIcon sx={{ fontSize: "2rem" }} />}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          href="https://x.com/petanikeju"
          target="blank"
          startIcon={<XIcon sx={{ fontSize: "2rem" }} />}
        >
          X
        </Button>
        <Button
          variant="outlined"
          href="https://wa.me/6282337185381"
          target="blank"
          startIcon={<WhatsAppIcon sx={{ fontSize: "2rem" }} />}
        >
          WhatsApp
        </Button>
        <Button
          variant="outlined"
          href="mailto:heryhermansyah563@gmail.com"
          target="blank"
          startIcon={<EmailIcon sx={{ fontSize: "2rem" }} />}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          href="https://www.tiktok.com/@hertech.store"
          target="blank"
          startIcon={<PlayLessonIcon sx={{ fontSize: "2rem" }} />}
        >
          Tiktok
        </Button>
      </div>
    </div>
  );
};

export default ContactList;
