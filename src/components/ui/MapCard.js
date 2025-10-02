import React from "react";

const MapCard = ({location, className}) => {
  return (
    <div>
      <div>
        <iframe
          className={`w-full h-[250px] sm:h-[350px] md:h-[650px] rounded-2xl ${className}`}
          src={location}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapCard;