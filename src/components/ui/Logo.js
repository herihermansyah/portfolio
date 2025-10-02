import Image from "next/image";
import React from "react";

function Logo({
  logoText,
  logoImage,
  width = 50,
  height = 50,
  textClass = "",
  className = "",
}) {
  return (
    <div className={`${className}`}>
      <h1 className={`${textClass}`}>{logoText}</h1>
      {logoImage && (
        <Image
          src={logoImage}
          alt={logoText}
          width={width}
          height={height}
          priority
        />
      )}
    </div>
  );
}

export default Logo;
