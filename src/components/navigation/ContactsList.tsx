import {ContactType} from "@/data/contacts";
import {Button} from "@mui/material";
import Link from "next/link";
import React from "react";

type PropsContact = {
  data: ContactType[];
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  boxClass?: string;
};

function ContactsList({
  data,
  variant = "contained",
  color = "primary",
  boxClass = "",
}: PropsContact) {
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
