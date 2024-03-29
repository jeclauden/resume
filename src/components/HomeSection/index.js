import React from "react";
import { motion } from "framer-motion";
import {
  Header,
  HeaderWrapper,
  Name,
  Resume,
  FloatingButton,
  ChevronDown,
  NavButtonLink,
} from "./HomeElements";

const HomeSection = () => {
  return (
    <Header id="header">
      <HeaderWrapper>
        <Name id="name">Jean-Claude Ndagijimana</Name>
        <Resume>Interactive Resume</Resume>
      </HeaderWrapper>
      <FloatingButton id="scroll-button">
        <NavButtonLink to="profile" smooth={true} duration={500} spy={true}>
          <motion.div
            style={{ marginTop: "-10px" }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <ChevronDown />
          </motion.div>
        </NavButtonLink>
      </FloatingButton>
    </Header>
  );
};

export default HomeSection;
