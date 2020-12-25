import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 800px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #010606;
  padding-left: 40px;
  padding-right: 40px;

  /* @media screen and (max-width: 768) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 14px;
  margin-top: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesCardHeader = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesParag = styled.p`
  font-size: 1rem;
  text-align: center;
`;