import React from "react";

const MapCard = ({location, className}) => {
  return (
    <div>
      <div>
        <iframe
          className={`w-full h-[250px] sm:h-[350px] md:h-[650px] ${className}`}
          src={location}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapCard;
