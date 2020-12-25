import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ handleIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={scrollToTop}>
            CLD
          </NavLogo>
          <MobileIcon onClick={handleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="profile"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Profile
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="education"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Education
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Projects
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
