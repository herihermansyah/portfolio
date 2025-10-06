import React from "react";
type MapProps = {
  location: string;
  className?: string;
};
const MapCard = ({location, className = "w-full h-[250px] sm:h-[350px] md:h-[650px] rounded-2xl "}: MapProps) => {
  return (
    <div>
      <div>
        <iframe
          className={className}
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
