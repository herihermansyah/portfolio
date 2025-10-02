"use client";

import {Button} from "@mui/material";
import React, {useState} from "react";
import {FaDownload} from "react-icons/fa";

function DownloadFile({file, variant, name}) {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant={variant}
      download={true}
      href={file}
      loading={loading}
      startIcon={<FaDownload />}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
      }}
    >
      {name}
    </Button>
  );
}

export default DownloadFile;
