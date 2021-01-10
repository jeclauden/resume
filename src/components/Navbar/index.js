import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

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
  const [highlightProfile, setHightProfile] = useState(false);

  const profileRef = useRef();

  const changeMainMenuPositionOnScroll = () => {
    if (window.scrollY >= window.innerHeight - 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const changeProfileBg = () => {
    if (window.scrollY >= window.innerHeight + 20) {
      setHightProfile(false);
    } else {
      setHightProfile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeMainMenuPositionOnScroll);
    window.addEventListener("scroll", changeProfileBg);
    return () => {
      window.removeEventListener("scroll", changeMainMenuPositionOnScroll);
      window.removeEventListener("scroll", changeProfileBg);
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
          <MobileIcon id="button">
            <BarsContainer>
              <MenuBars />
            </BarsContainer>
          </MobileIcon>
        </NavContainer>
      </Nav>
      <NavMenu
        scrollNav={scrollNav}
        numberOfMenuItems={menu.length}
        ref={profileRef}
      >
        {menu.map((menuItem) => (
          <NavItem key={menuItem}>
            <NavLink
              className="nav-link"
              profile={highlightProfile ? `${menuItem}` : "undefined"}
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

      <HorizontalMenu id="mobile-menu">
        {menu.map((menuItem) => (
          <NavItem key={menuItem} className="nav-item">
            <NavLink
              className="nav-link"
              profile={highlightProfile ? `${menuItem}` : "undefined"}
              to={menuItem}
              smooth={true}
              duration={500}
              spy={true}
              offset={-49}
            >
              {capitalize(menuItem)}
            </NavLink>
          </NavItem>
        ))}
      </HorizontalMenu>
    </div>
  );
};

export default Navbar;
