import React from "react";
import { CareerContainer, CareerTitle, CareerWrapper } from "./CareerElements";
import { EducationOne, EducationTwo } from "./Data";
import Main from "./Main";
const Career = () => {
  return (
    <CareerContainer>
      <CareerWrapper>
        <CareerTitle>Education</CareerTitle>
        <Main {...EducationOne} />
        <Main {...EducationTwo} />
      </CareerWrapper>
    </CareerContainer>
  );
};

export default Career;
