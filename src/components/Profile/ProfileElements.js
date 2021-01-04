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
  height: 2px;
  color: red;
  margin-top: 35px;
  width: 100%;
`;

export const AboutMe = styled.p``;

export const AboutMeWrapper = styled.div`
  ${normalFlex}

  margin-top: 30px;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  ${normalFlex}
`;

export const ProfileImage = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 100%;
`;

export const AboutMeTitle = styled.h2`
  ${profileColor}
  ${normalFlex}
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
`;
