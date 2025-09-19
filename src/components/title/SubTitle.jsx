import React from "react";

function SubTitle({SubTitle, className = ""}) {
  return (
    <div>
      <h3 className={`font-bold text-xl ${className}`}>{SubTitle}</h3>
    </div>
  );
}

export default SubTitle;
