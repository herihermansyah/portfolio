import {Button} from "@mui/material";
import React from "react";

function ButtonClick({btnValue}) {
  return (
    <Button variant="contained" href="./cv.pdf" download={true}>
      {btnValue}
    </Button>
  );
}

export default ButtonClick;
