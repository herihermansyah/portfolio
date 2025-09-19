import React from "react";

function ImageCard({img, imgName}) {
  return <img className="rounded-full w-80 xl:w-[1000px]" src={img} alt={imgName} />;
}

export default ImageCard;
