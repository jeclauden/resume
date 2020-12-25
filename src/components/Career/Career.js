import React from "react";
import { CareerContainer, CareerTitle, CareerWrapper } from "./CareerElements";
import Main from "./Main";
const Career = () => {
  return (
    <CareerContainer>
      <CareerWrapper>
        <CareerTitle>Education</CareerTitle>
        <Main />
        <Main />
      </CareerWrapper>
    </CareerContainer>
  );
};

export default Career;
