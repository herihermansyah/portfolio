"use client";

import {Button} from "@mui/material";
import React, {useState} from "react";
import {FaDownload} from "react-icons/fa";

type DownloadProps = {
  file: string;
  variant?: "text" | "outlined" | "contained";
  name: string;
  className?: string;
};

function DownloadFile({file, variant, name, className = ""}: DownloadProps) {
  const [loading, setLoading] = useState(false);
  return (
    <div className={`${className}`}>
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
    </div>
  );
}

export default DownloadFile;
