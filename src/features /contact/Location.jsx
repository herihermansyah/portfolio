import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <iframe
          className="w-full h-[250px] sm:h-[350px] md:h-[650px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327919.819335755!2d107.22133776676473!3d-2.403434462276534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1757093180184!5m2!1sen!2sid"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
