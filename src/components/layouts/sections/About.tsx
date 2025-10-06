import Description from "@/components/ui/Description";
import SectionTitle from "@/components/ui/SectionTitle";
import {aboutText} from "@/data/about";
import {motion} from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.4, ease: "easeInOut"}}
      viewport={{amount: 0.2}}
    >
      <SectionTitle title="about me" />
      <Description articleClass="flex flex-col gap-4" parafClass="lg:text-2xl">
        {aboutText}
      </Description>
    </motion.div>
  );
}

export default About;
