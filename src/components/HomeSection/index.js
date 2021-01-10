import React, { useState, useEffect } from "react";
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
  const [nameFontSize, setFontSize] = useState(false);

  const changeFontSize = () => {
    if (window.innerHeight <= 540) {
      setFontSize(true);
    } else {
      setFontSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeFontSize);
    return () => {
      window.removeEventListener("resize", changeFontSize);
    };
  }, []);

  return (
    <Header id="header">
      <HeaderWrapper>
        <Name nameFontSize={nameFontSize}>Jean-Claude Ndagijimana</Name>
        <Resume>Interactive Resume</Resume>
      </HeaderWrapper>
      <FloatingButton>
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
