import React from "react";
import HeroSection from "./HeroSection";

function About() {
  const data = {
    name: "Sumit Kumar Patel",
    image: "./images/about1.svg",
    customStyles: {
      imageStyle: {
        width: "70%",
      },
    },
  };
  return <HeroSection {...data} />;
}

export default About;
