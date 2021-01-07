import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { animateScroll as scroll } from "react-scroll";
import "../../../src/App.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  BarsContainer,
  MenuBars,
  HorizontalMenu,
} from "./NavbarElements";

const Navbar = ({ handleIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showHorizontalMenu, setShowHorizontalMenu] = useState(false);
  const [changeDisplayMode, setChangeDisplayMode] = useState(false);
  const [highlightProfile, setHighlightProfile] = useState(true);
  const profileRef = React.createRef();
  const navLink = useRef(null);

  const nodeRef = useRef(null);

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight - 70) {
      setScrollNav(true);
      setHighlightProfile(false);
    } else {
      setScrollNav(false);
      setHighlightProfile(true);
    }
  };

  const changeProfile = () => {
    if (window.scrollY >= window.innerHeight + 20) {
      setHighlightProfile(false);
    } else {
      setHighlightProfile(true);
    }
  };

  const handleShowMenu = () => {
    setChangeDisplayMode(false);
    setShowHorizontalMenu(!showHorizontalMenu);
  };

  const handleCloseMenu = () => {
    setShowHorizontalMenu(false);
    setChangeDisplayMode(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.addEventListener("scroll", changeProfile);

    return () => {
      window.removeEventListener("scroll", changeNav);
      window.removeEventListener("scroll", changeProfile);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const menu = ["profile", "education", "experience", "projects", "contact"];

  return (
    <div style={{ position: "sticky", top: "-2px" }}>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={scrollToTop}>
            JN
          </NavLogo>
          <MobileIcon onClick={handleShowMenu}>
            <BarsContainer>
              <MenuBars />
            </BarsContainer>
          </MobileIcon>
        </NavContainer>
      </Nav>
      <NavMenu scrollNav={scrollNav} numberOfMenuItems={menu.length}>
        {menu.map((menuItem) => (
          <NavItem key={menuItem} ref={profileRef}>
            <NavLink
              className="nav-link"
              data-check={highlightProfile ? `${menuItem}` : "undefined"}
              to={menuItem}
              smooth={true}
              duration={500}
              spy={true}
            >
              {capitalize(menuItem)}
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>
      <CSSTransition
        in={showHorizontalMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
        ref={nodeRef}
      >
        <HorizontalMenu changeDisplayMode={changeDisplayMode}>
          {menu.map((menuItem) => (
            <NavItem key={menuItem}>
              <NavLink
                className="nav-link"
                data-check={highlightProfile ? `${menuItem}` : "undefined"}
                to={menuItem}
                smooth={true}
                duration={500}
                spy={true}
                offset={-49}
                onClick={handleCloseMenu}
                ref={navLink}
              >
                {capitalize(menuItem)}
              </NavLink>
            </NavItem>
          ))}
        </HorizontalMenu>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
