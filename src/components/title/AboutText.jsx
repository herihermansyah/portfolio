import React from "react";

function AboutText({aboutText, className}) {
  return (
    <div>
      <p className={`${className}`}>{aboutText}</p>
    </div>
  );
}

export default AboutText;
