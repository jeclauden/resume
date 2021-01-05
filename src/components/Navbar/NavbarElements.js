import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { navLinkStyles, normalFlex } from "../../GlobalElements";
import { ReactComponent as Menu } from "../../images/m.svg";

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
    padding: 10px 15px;
  }
`;
export const MenuBars = styled(Menu)`
  height: 20px;
  width: 40px;
  fill: #888;
  font-size: 0.5rem;
`;
export const BarsContainer = styled.div`
  ${normalFlex}
  border-radius: 4px;
  border: #ddd solid 1px;
  height: 31px;
  width: 41px;

  &:hover {
    background-color: #ddd;
    ${MenuBars} {
      fill: #222;
    }
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

export const MobileIcon = styled.div`
  display: none;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #fff;
  }
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
  position: ${({ scrollNav }) => (scrollNav ? "fixed" : "absolute")};
  height: 300px;
  width: 120px;
  top: ${({ scrollNav }) => (scrollNav ? "70px" : "100%")};
  right: 5vw;
  z-index: 1000;
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HorizontalMenu = styled.ul`
  ${navMenuStyles}
  display: ${({ changeDisplayMode }) => (changeDisplayMode ? "none" : "block")};
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  background: #222;
  border-top: 1px solid #888;
`;

export const NavItem = styled.li`
  height: 60px;
  width: 100%;
`;

export const NavLink = styled(LinkScroll)`
  ${navLinkStyles}

  &.active {
    background-color: #21a39f;
  }
`;
