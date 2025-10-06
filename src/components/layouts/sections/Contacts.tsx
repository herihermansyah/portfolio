import ContactsList from "@/components/navigation/ContactsList";
import MapCard from "@/components/ui/MapCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {contacts} from "@/data/contacts";
import {motion} from "framer-motion";

function Contacts() {
  return (
    <motion.div
      id="contact"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.4, ease: "easeInOut"}}
      viewport={{amount: 0.2}}
    >
      <SectionTitle title="contacts" />
      <div className="flex flex-col gap-10 xl:flex-row xl:justify-between">
        <div>
          <SectionTitle
            title="get in touch"
            textClass="mb-4 capitalize text-center"
          />
          <ContactsList data={contacts} boxClass="grid grid-cols-3 gap-2" />
        </div>
        <div className="xl:flex-1">
          <SectionTitle
            title="location"
            textClass="mb-4 capitalize text-center"
          />
          <MapCard location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327919.819335755!2d107.22133776676473!3d-2.403434462276534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1757093180184!5m2!1sen!2sid" />
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
