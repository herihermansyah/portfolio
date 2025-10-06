import ProjectsCard from "@/components/ui/ProjectsCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {projects} from "@/data/projects";
import {motion} from "framer-motion";

function Portfolio() {
  return (
    <motion.div
      id="portfolio"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.4, ease: "easeInOut"}}
      viewport={{amount: 0.2}}
    >
      <SectionTitle title="portfolio" />
      <ProjectsCard data={projects} />
    </motion.div>
  );
}

export default Portfolio;
