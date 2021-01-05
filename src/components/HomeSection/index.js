import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Header,
  HeaderWrapper,
  Name,
  Resume,
  HomeBG,
  FloatingButton,
  ChevronDown,
  NavButtonLink,
} from "./HomeElements";

const HomeSection = () => {
  const [nameFontSize, setFontSize] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);

  const changeFontSize = () => {
    if (window.innerHeight <= 540) {
      setFontSize(true);
    } else {
      setFontSize(false);
    }
  };

  const getWindowHeight = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", changeFontSize);
    window.addEventListener("resize", getWindowHeight);
    return () => {
      window.removeEventListener("resize", changeFontSize);
      window.removeEventListener("resize", getWindowHeight);
    };
  }, []);

  const string = height.toString() + "px";

  return (
    <Header style={{ height: `${string}` }}>
      {/* <HomeBG /> */}
      <HeaderWrapper>
        <Name nameFontSize={nameFontSize}>Jean-Claude Ndagijimana</Name>
        <Resume>The Height is {string}</Resume>
        <div>The </div>
      </HeaderWrapper>
      <FloatingButton>
        <NavButtonLink to="profile" smooth={true} duration={500} spy={true}>
          <motion.div
            style={{ marginTop: "-5px" }}
            animate={{ y: 10 }}
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
