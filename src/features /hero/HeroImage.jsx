import React from "react";
import me from "../../assets/me.webp";

const HeroImage = () => {
  return (
    <div>
      <section className="flex justify-center">
        <img
          src={me}
          alt="my photo"
          loading="lazy"
          className="w-[75%] h-full object-cover md:w-[60%] xl:w-[75%]"
        />
      </section>
    </div>
  );
};

export default HeroImage;
