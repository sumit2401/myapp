import React from "react";
import HeroSection from "./HeroSection";

function Home() {
  const data = {
    name: "Sumit Patel",
    image: "./images/hero.svg",
  };

  return <HeroSection {...data} />;
}

export default Home;
