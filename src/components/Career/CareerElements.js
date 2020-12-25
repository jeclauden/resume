import styled from "styled-components";

export const CareerContainer = styled.div`
  background: #f4efde;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 80px 200px;

  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const CareerWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const CareerTitle = styled.h3`
  font-weight: 300;
  font-size: 28px;
  color: #22a39f;
  line-height: 1.1;
  padding: 24px 0;
`;
