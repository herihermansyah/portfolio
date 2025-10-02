import {Button} from "@mui/material";
import Link from "next/link";
import React from "react";

function ContactsList({data, variant, color, boxClass = "", style = ""}) {
  return (
    <div className={`${boxClass}`}>
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button
            variant={variant}
            color={color}
            key={index}
            startIcon={<Icon />}
          >
            <Link target="blank" href={item.path}>
              {item.title}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default ContactsList;
