import styled from "styled-components";
import {
  flexDisplay,
  normalFlex,
  profileColor,
  textGreyColor,
  primaryGBColor,
} from "../../GlobalElements";

export const ProfileContainer = styled.div`
  ${primaryGBColor}
  ${flexDisplay}
  ${textGreyColor}
`;

export const ProfileTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ProfileTitle = styled.h2`
  font-weight: 300;
  font-size: 54px;
  ${profileColor}
`;

export const ProfileSubtitle = styled.p`
  margin: 5px 0;

  @media (min-width: 768px) {
    font-size: 21px;
  }
`;

export const HLine = styled.hr`
  border-bottom: 1px solid #fff;
  border-bottom-color: rgba(255, 255, 255, 0.36);
  margin-top: 35px;
  width: 100%;
  display: inline-block;
`;

export const AboutMe = styled.p``;

export const AboutMeWrapper = styled.div`
  ${normalFlex}

  margin-top: 30px;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  margin: 30px 0;
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;

export const AboutMeTitle = styled.h2`
  ${profileColor}
  ${normalFlex}
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Location = styled.div`
${normalFlex}
justify-content: center;
align-items: start;
`
