import { css } from "styled-components";

export const normalFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Text Colours
export const profileColor = css`
  color: #118ab2;
`;

export const textGreyColor = css`
  color: #434242; ;
`;
export const primaryGBColor = css`
  background: #fff1e6;
`;
export const secondaryBGColor = css`
  background: #f0efeb;
`;
export const thirdBGColor = css`
  background: #118ab2;
`;

export const flexDisplay = css`
  ${normalFlex}
  width: 100%;
  margin: 0;
  padding: 80px 200px;

  @media screen and (max-width: 1200px) {
    padding: 80px 124px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const navLinkStyles = css`
  color: #fff;
  ${normalFlex}
  text-decoration: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
`;
