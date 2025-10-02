"use client";

import {motion} from "framer-motion";
import ContactsList from "@/components/navigation/ContactsList";
import MapCard from "@/components/ui/MapCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {contactsData} from "@/data/contactsData";
import React from "react";

function Contacts() {
  return (
    <div id="contact">
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{amount: 0.2}}
      >
        <SectionTitle title={"contact"} />
      </motion.div>
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{amount: 0.2}}
        >
          <SectionTitle title={"get in touch"} textClass="text-xl" />
          <ContactsList
            boxClass="grid grid-cols-2 md:grid-cols-3 gap-2"
            data={contactsData}
            variant="contained"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{amount: 0.2}}
        >
          <SectionTitle title={"location"} textClass="text-xl" />
          <MapCard
            location={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327919.819335755!2d107.22133776676473!3d-2.403434462276534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1757093180184!5m2!1sen!2sid"
            }
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
