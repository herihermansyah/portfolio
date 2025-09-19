import React from "react";
import ImageCard from "../../components/card/ImageCard";
import me from "../../assets/me.webp";
import TitleName from "../../components/title/TitleName";
import SubTitle from "../../components/title/SubTitle";
import AboutText from "../../components/title/AboutText";
import SocialMediaCard from "../../components/card/SocialMediaCard";
import {socialData} from "../../data/socialData";
import ButtonClick from "../../components/button/ButtonClick";

function Hero() {
  return (
    <div id="home"
      className="container mx-auto px-4 md:px-0 flex flex-col gap-10 items-center justify-center
                    xl:flex-row xl:justify-between"
    >
      <div>
        <ImageCard img={me} imgName={"photo heri hermansyah"} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <TitleName titleName={"Hey, I'm Heri Hermansyah"} />
          <SubTitle className="xl:text-5xl" SubTitle={"Frontend Developer"} />
          <AboutText
            aboutText={
              "I specialize in creating modern, responsive, and user-friendly websites using React and Tailwind CSS. With a strong focus on clean code and seamless user experiences, I transform designs into functional and engaging web interfaces across all devices."
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <SocialMediaCard media={socialData} />
          </div>
          <div>
            <ButtonClick btnValue={"download"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
