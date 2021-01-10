import React from "react";
import ResumeEntry from "../components/Resume/ResumeEntry";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Profile from "../components/Profile/Profile";
import { EducationObjects } from "../components/Resume/ResumeData";
import { ExperienceObjects } from "../components/Resume/ResumeData";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HomeSection />
      <Navbar />
      <Profile />
      <ResumeEntry
        title="Education"
        data={EducationObjects}
        bgColor={"#f0efeb"}
      />
      <ResumeEntry
        title="Experience"
        data={ExperienceObjects}
        bgColor={"#B7B7A4"}
      />
      <Footer />
    </div>
  );
};

export default Home;
