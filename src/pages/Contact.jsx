import React from "react";
import ContactList from "../features /contact/ContactList";
import Location from "../features /contact/Location";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-center text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-bold mb-20">
        Contact
      </h2>
      <div className="container mx-auto px-4 md:px-0 flex flex-col gap-10">
        <h3 className="text-center font-bold mb-4 text-2xl">Get In Touch</h3>
        <ContactList />
        <h3 className="text-center font-bold mb-4 text-2xl">Location</h3>
        <Location />
      </div>
    </div>
  );
};

export default Contact;
