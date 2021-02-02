import styled from "styled-components";
import { navLinkStyles, normalFlex } from "../../GlobalElements";
import { FaChevronDown } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const Header = styled.div`
  display: block;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
        45deg,
        hsla(64, 83%, 54%, 0.05) 0px,
        hsla(64, 83%, 54%, 0.05) 1px,
        transparent 1px,
        transparent 11px,
        hsla(64, 83%, 54%, 0.05) 11px,
        hsla(64, 83%, 54%, 0.05) 12px,
        transparent 12px,
        transparent 32px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(64, 83%, 54%, 0.05) 0px,
        hsla(64, 83%, 54%, 0.05) 1px,
        transparent 1px,
        transparent 11px,
        hsla(64, 83%, 54%, 0.05) 11px,
        hsla(64, 83%, 54%, 0.05) 12px,
        transparent 12px,
        transparent 32px
      ),
      repeating-linear-gradient(
        0deg,
        hsla(64, 83%, 54%, 0.05) 0px,
        hsla(64, 83%, 54%, 0.05) 1px,
        transparent 1px,
        transparent 11px,
        hsla(64, 83%, 54%, 0.05) 11px,
        hsla(64, 83%, 54%, 0.05) 12px,
        transparent 12px,
        transparent 32px
      ),
      repeating-linear-gradient(
        135deg,
        hsla(64, 83%, 54%, 0.05) 0px,
        hsla(64, 83%, 54%, 0.05) 1px,
        transparent 1px,
        transparent 11px,
        hsla(64, 83%, 54%, 0.05) 11px,
        hsla(64, 83%, 54%, 0.05) 12px,
        transparent 12px,
        transparent 32px
      ),
      linear-gradient(90deg, rgb(29, 53, 87), rgb(69, 123, 157));
    background-attachment: fixed;
    z-index: 2;
  }
`;

export const HeaderWrapper = styled.div`
  color: #fff;
  text-align: center;
  z-index: 444;
  position: relative;
  top: 32%;
  left: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    padding: 0 35px;
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
  z-index: 10;

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

export const Name = styled.h1`
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  border-bottom-color: rgba(255, 255, 255, 0.36);
  display: inline-block;

  @media screen and (min-width: 769px) {
    font-size: 65px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    margin: 0 20px;
  }

  @media screen and (max-height: 540px) {
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
