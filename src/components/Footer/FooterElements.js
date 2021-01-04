import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  background: #003f3c;
  color: #fff;
`;

export const FooterWrapper = styled.div`
  padding: 200px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32 px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  padding: 0 30px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 15px;
  } */
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  font-size: 25px;
  padding: 18px 0;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex-direction: column;
  margin: 40px auto 0 auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIconLink = styled.a`
  margin: 0 8px;
  padding: 10px;
  cursor: pointer;
  color: #fff;
`;

export const Logo = styled(Link)`
  margin: 0 15px;
  cursor: pointer;
`;

export const CopyRights = styled.p`
  font-size: 15px;
  margin: 0 15px;
  margin: 15px 0;
`;
