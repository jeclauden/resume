import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { motion, useCycle } from "framer-motion";

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
  const [changeDisplayMode, setChangeDisplayMode] = useState("block");
  const [height, setHeight] = useState(0);
  const [highlightProfile, setHightProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMobileMenuHeight = () => {
    setChangeDisplayMode("block");
    setHeight(height === 0 ? "auto" : 0);
  };

  const handleCloseMobileMenu = () => {
    setChangeDisplayMode("none");
    setHeight(0);
    setIsOpen(false);
  };

  const handleCloseMobileMenuOnResize = () => {
    if (window.innerWidth > 768) {
      setChangeDisplayMode("none");
    } else {
      setChangeDisplayMode("block");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeMainMenuPositionOnScroll);
    window.addEventListener("resize", handleCloseMobileMenuOnResize);
    window.addEventListener("scroll", changeProfileBg);
    return () => {
      window.removeEventListener("scroll", changeMainMenuPositionOnScroll);
      window.removeEventListener("resize", handleCloseMobileMenuOnResize);
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
          <MobileIcon
            onClick={toggleMobileMenuHeight}
            aria-controls="horizontal-menu"
          >
            {/* <BarsContainer> */}
            {/* <MenuBars /> */}
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
              <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.nav>
            {/* </BarsContainer> */}
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

      <HorizontalMenu
        id="horizontal-menu"
        duration={500}
        height={height}
        style={{ display: `${changeDisplayMode}` }}
      >
        {menu.map((menuItem) => (
          <NavItem key={menuItem}>
            <NavLink
              className="nav-link"
              to={menuItem}
              smooth={true}
              duration={500}
              spy={true}
              offset={-49}
              onClick={handleCloseMobileMenu}
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
