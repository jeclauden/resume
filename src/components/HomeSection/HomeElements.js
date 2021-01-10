import styled from "styled-components";
import { navLinkStyles, normalFlex } from "../../GlobalElements";
import Image from "../../images/prog.jpg";
import { FaChevronDown } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const Header = styled.div`
  background: no-repeat center right fixed url(${Image});
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -ms-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
  background-size: cover;
  height: 100%;

  @media only screen and (orientation: portrait) and (max-width: 768px) {
    -webkit-background-size: auto 150%;
    -moz-background-size: auto 150%;
    -ms-background-size: auto 150%;
    background-attachment: scroll;
  }
  @media only screen and (orientation: landscape) and (max-width: 768px) {
    -webkit-background-size: 150% auto;
    -moz-background-size: 150% auto;
    -ms-background-size: 150% auto;
    background-attachment: scroll;
  }
`;

export const FloatingButton = styled.div`
  ${normalFlex}
  background-color: #222;
  position: absolute;
  height: 80px;
  width: 120px;
  right: 5vw;
  bottom: 0;

  @media screen and (max-width: 768px) {
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #888;
  }
`;

export const NavButtonLink = styled(LinkScroll)`
  ${navLinkStyles}
`;

export const ChevronDown = styled(FaChevronDown)`
  height: 40px;
  width: 40px;
`;

export const HeaderWrapper = styled.div`
  color: #fff;
  text-align: center;
  z-index: 444;
  position: absolute;
  top: 32%;
  left: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    padding: 0 35px;
  }
`;

export const Name = styled.h1`
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  border-bottom-color: rgba(255, 255, 255, 0.36);
  display: inline-block;
  font-size: ${({ nameFontSize }) => (nameFontSize ? "2rem" : "65px")};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    margin: 0 20px;
  }
`;

export const Resume = styled.p`
  font-weight: 200;
  font-size: 28px;
  line-height: 1.5;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
