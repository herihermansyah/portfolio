import { Button, Divider } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 md:px-0 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-[1.25rem] md:text-[1.5rem] xl:text-[2rem] font-bold mb-20">
          About Me
        </h2>
        <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.75rem] xl:leading-10">
          Hi, 👋, I'm <span class="font-semibold">Heri Hermansyah 😎</span>, a
          <span class="font-semibold"> Frontend Developer 💻</span> <br />{" "}
          specializing in building modern web interfaces using{" "}
          <a href="https://react.dev/" target="blank">
            <span class=" devicon-react-original colored font-semibold">
              React.js{" "}
            </span>
          </a>
          with styling powered by{" "}
          <a href="https://tailwindcss.com/" target="blank">
            <span class="font-semibold devicon-tailwindcss-original colored">
              {" "}
              Tailwind CSS
            </span>{" "}
          </a>
          and{" "}
          <a href="https://mui.com/" target="blank">
            <span class="font-semibold devicon-materialui-plain colored">
              {" "}
              MUI
            </span>
          </a>
        </p>
        <Divider />
        <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.75rem] xl:leading-10">
          My expertise lies in creating{" "}
          <span class="font-semibold">responsive designs</span>, maintaining{" "}
          <span class="font-semibold">clean code</span>, and delivering
          <span class="font-semibold"> seamless user experiences</span>. I have
          worked on projects ranging from simple landing pages to interactive
          React-based web applications optimized for multiple devices.
        </p>
        <Divider />

        <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.75rem] xl:leading-10">
          As a developer, I enjoy collaborating in teams, solving problems, and
          constantly learning new technologies. I am currently{" "}
          <span class="font-semibold">open to job opportunities </span>
          and collaborations in web development projects.
        </p>
        <Divider />
      </div>
      <div className="flex justify-center">
        <Button size="large" component="a" href="#portfolio" variant="contained">
          View Portfolio
        </Button>
      </div>
    </section>
  );
};

export default About;
