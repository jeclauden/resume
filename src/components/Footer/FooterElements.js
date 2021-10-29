import styled from "styled-components";
import { Link } from "react-scroll";
import { normalFlex } from "../../GlobalElements";
import { flexDisplay } from "../../GlobalElements";

export const FooterContainer = styled.div`
  background: #003f3c;
  color: #fff;
  ${flexDisplay}
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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
`;

export const MailLink = styled.a`
  font-size: 15px;
  margin-bottom: 16px;
  text-decoration: none;
  color: #fff;
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
  padding: 5px 10px;
  cursor: pointer;
`;

export const CopyRights = styled.p`
  font-size: 15px;
  margin: 0 15px;
  margin: 15px 0;
`;

export const InputContainer = styled.div`
  ${normalFlex}
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TextAreaComponent = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 992px) {
    align-items: center;
  }
`;
