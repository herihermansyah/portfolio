import Image from "next/image";
import React from "react";

type LogoProps = {
  logoText: string;
  logoImage?: string;
  textClass?: string;
  imageClass?: string;
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

function Logo({
  logoText,
  logoImage,
  textClass = "",
  imageClass = "",
  className = "",
  src = "",
  width = 50,
  height = 50,
}: LogoProps) {
  return (
    <div className={className}>
      <h1 className={textClass}>{logoText}</h1>
      {logoImage && (
        <Image
          className={imageClass}
          src={src}
          alt={logoText}
          width={width}
          height={height}
        />
      )}
    </div>
  );
}

export default Logo;
