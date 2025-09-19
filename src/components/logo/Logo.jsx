import React from "react";

function Logo({logoText, logoImage}) {
  return (
    <div>
      <h1 className="uppercase font-extrabold text-3xl text-white">{logoText}</h1>
      {logoImage && <img src={logoImage} alt={logoText} />}
    </div>
  );
}

export default Logo;
