import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import ContactForm from "./ContactForm";

import {
  SocialMedia,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrapper,
  Logo,
  CopyRights,
} from "../Footer/FooterElements";
import { Container, ContainerWrapper } from "../Resume/Elements";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Container id="contact" style={{ paddingTop: "200px" }}>
      <ContainerWrapper>
        <h2
          style={{ fontSize: "54px", fontWeight: "300", textAlign: "center" }}
        >
          Contact
        </h2>
        <ContactForm />
        <SocialMedia>
          <SocialMediaWrapper>
            <Logo to="/" onClick={scrollToTop}>
              JN
            </Logo>
            <CopyRights> &copy; {new Date().getFullYear()} Claude</CopyRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/jeclauden"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/jeclauden"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            <p style={{ fontSize: "12px" }}>
              I built this website as a away of learning React
            </p>
          </SocialMediaWrapper>
        </SocialMedia>
      </ContainerWrapper>
    </Container>
  );
};

export default Footer;
