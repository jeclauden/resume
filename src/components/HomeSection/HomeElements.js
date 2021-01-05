import styled from "styled-components";
import { navLinkStyles, normalFlex } from "../../GlobalElements";
import Image from "../../images/prog.jpg";
import { FaChevronDown } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const Header = styled.header`
  min-height: 375px;
  position: relative;
  background: violet;
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
  }
`;

export const NavButtonLink = styled(LinkScroll)`
  ${navLinkStyles}
`;

export const ChevronDown = styled(FaChevronDown)`
  height: 40px;
  width: 40px;
`;

export const HomeBG = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
  /* background-image: url(${Image}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: -5;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
`;

export const HeaderWrapper = styled.div`
  color: #fff;
  padding: 45vh 0;
  text-align: center;
  z-index: 44;

  @media screen and (min-width: 768px) {
    padding: 45vh 35px;
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
