import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeOjbectFive,
  homeOjbectFour,
  homeOjbectOne,
  homeOjbectThree,
  homeOjbectTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeOjbectOne} />
      <InfoSection {...homeOjbectTwo} />
      <InfoSection {...homeOjbectThree} />
      <InfoSection {...homeOjbectFour} />
      <InfoSection {...homeOjbectFive} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
