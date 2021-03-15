import React from "react";
import Education from "../components/Resume/Education";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Profile from "../components/Profile/Profile";
import {
  ExperienceObjects,
  EducationObjects,
} from "../components/Resume/ResumeData";
import Navbar from "../components/Navbar";
import Experience from "../components/Resume/Experience";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HomeSection />
      <Navbar />
      <Profile />
      <Education
        title="Education"
        data={EducationObjects}
        bgColor={"#f0efeb"}
      />
      <Experience
        title="Software Projects"
        data={ExperienceObjects}
        bgColor={"#ECEEF6"}
      /> 
      <Footer />
    </div>
  );
};

export default Home;
