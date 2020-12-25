import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  BtnWrapper,
  HeroBg,
  HeroContainer,
  HeroContent,
  HomeHeader,
  HomeSubHeader,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HomeHeader>Virtual Banking Made Easy</HomeHeader>
        <HomeSubHeader>
          Sign up for a new account todat anbd receive $250 in credit towards
          your next payments
        </HomeSubHeader>
        <BtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
