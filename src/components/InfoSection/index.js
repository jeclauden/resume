import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  ColumnTwo,
  Img,
  ImgWrap,
  InfoRow,
  ColumnOne,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  BtnWrap,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </ColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
