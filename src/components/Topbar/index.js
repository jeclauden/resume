import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarLink,
  SideBtnWrapper,
  TopbarRoute,
  TopbarMenu,
} from "./TopbarElements";

const Topbar = ({ handleIsOpen, isOpen }) => {
  return (
    <TopbarContainer isOpen={isOpen}>
      <Icon onClick={handleIsOpen}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="home" onClick={handleIsOpen}>
            Home
          </TopbarLink>
          <TopbarLink to="profile" onClick={handleIsOpen}>
            Profile
          </TopbarLink>
          <TopbarLink to="education" onClick={handleIsOpen}>
            Education
          </TopbarLink>
          <TopbarLink to="experience" onClick={handleIsOpen}>
            Experience
          </TopbarLink>
          <TopbarLink to="projects" onClick={handleIsOpen}>
            Projects
          </TopbarLink>
          <TopbarLink to="/signup" onClick={handleIsOpen}>
            Sign Up
          </TopbarLink>
        </TopbarMenu>
        <SideBtnWrapper onClick={handleIsOpen}>
          <TopbarRoute to="signin">Sign In</TopbarRoute>
        </SideBtnWrapper>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
