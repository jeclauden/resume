import React from "react";
import Image from "../../images/claude.jpg";

import {
  ProfileContainer,
  ProfileTitle,
  ProfileSubtitle,
  HLine,
  ProfileTopWrapper,
  AboutMe,
  AboutMeWrapper,
  ImageContainer,
  ProfileImage,
  AboutMeTitle,
} from "./ProfileElements";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileTopWrapper>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileSubtitle>I am a Graduate Software Developer </ProfileSubtitle>
        <HLine />
        <AboutMeWrapper>
          <AboutMeTitle>About me</AboutMeTitle>
          <AboutMe>
            Goal-oriented and determined Bachelor of Information Technology
            (Software Development) graduate seeking to join ASC to take on
            challenges of developing technology solutions. Has university
            background in software development and worked on various projects
            and developed applications using various programming languages
            including Java, C++ and C#.
          </AboutMe>
          <ImageContainer>
            <ProfileImage src={Image} />
          </ImageContainer>
        </AboutMeWrapper>
      </ProfileTopWrapper>
    </ProfileContainer>
  );
};

export default Profile;