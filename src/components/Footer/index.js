import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  MailLink,
  SocialMedia,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrapper,
  Logo,
  CopyRights,
} from "../Footer/FooterElements";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <h2 style={{ fontSize: "54px", fontWeight: "300" }}>Contact</h2>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <MailLink href="mailto:jeclaudeb@gmail.com">
                Send me an email?
              </MailLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
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
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
