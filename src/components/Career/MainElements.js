import styled, { css } from "styled-components";

const flexDisplay = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #434242;
  margin-bottom: 25px;
`;

const columnDisplay = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const paraStyles = css`
  font-size: 15px;
  line-height: 1.64;
  margin-bottom: 10px;
`;

export const MainContainer = styled.div`
  ${flexDisplay}
  width: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const ColumnOne = styled.div`
  ${columnDisplay}
  margin-right: 40px;
  width: 33%;

  @media screen and (max-width: 992px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const ColumnTwo = styled.div`
  ${columnDisplay}
  width: 66%;
`;

export const MainTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.1;
`;

export const YearsPara = styled.p`
  font-size: 15px;
  line-height: 1.64;
`;

export const SubTitle = styled.p`
  ${paraStyles}
  font-weight: 700;
  line-height: 1.4;
`;

export const Description = styled.p`
  ${paraStyles}
`;
