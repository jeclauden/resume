import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { navLinkStyles, normalFlex } from "../../GlobalElements";

export const Nav = styled.nav`
  background: #222;
  ${normalFlex}

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  ${normalFlex}
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 6px 15px;
  }
`;


export const NavLogo = styled(LinkRouter)`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    display: block;
  }
`;

export const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const MenuButtonBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
`;

const navMenuStyles = css`
  ${normalFlex}
  flex-direction: column;
  list-style: none;
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

export const NavMenu = styled.ul`
  ${navMenuStyles}
  background: #222;
  position: absolute;
  height: auto;
  width: 120px;
  top: 100%;
  right: 5vw;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HorizontalMenu = styled.div`
  ${navMenuStyles}
  position: absolute;
  top: 51px;
  right: 0;
  left: 0;
  height: 0;
  background: #222;
  transition: height 0.3s ease-in-out;

  &::before {
    content: "";
    background-color: #888;
    height: 1px;
    display: block;
  }
`;

export const NavItem = styled.li`
  height: 60px;
  width: 100%;
`;

export const NavLink = styled(LinkScroll)`
  ${navLinkStyles}

  &.active {
    background-color: #118ab2;
  }
`;
