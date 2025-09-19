import React from "react";
import AboutText from "../../components/title/AboutText";
import {Divider} from "@mui/material";
import SubTitle from "../../components/title/SubTitle";

function About() {
  return (
    <div id="about" className="container mx-auto px-4 md:px-0">
      <SubTitle SubTitle={"About Me"} className="text-center my-10" />
      <div className="flex flex-col gap-4">
        <AboutText
          className={"md:text-2xl"}
          aboutText={
            "Hi, I'm Heri Hermansyah, a Frontend Developer specializing in building modern web interfaces using React with styling Tailwind CSS and  MUI"
          }
        />
        <AboutText
          className={"md:text-2xl"}
          aboutText={
            "My expertise lies in creating responsive designs, maintaining clean code, and delivering seamless user experiences. I have worked on projects ranging from simple landing pages to interactive React-based web applications optimized for multiple devices."
          }
        />
        <AboutText
          className={"md:text-2xl"}
          aboutText={
            "As a developer, I enjoy collaborating in teams, solving problems, and constantly learning new technologies. I am currently open to job opportunities and collaborations in web development projects."
          }
        />
      </div>
    </div>
  );
}

export default About;
