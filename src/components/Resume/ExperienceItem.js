import React from "react";
import { ColumnTwo, MainContainer, SubTitle } from "./MainElements";

const ExperienceItem = ({ subtitle, experience }) => {
  const content = <ul style={{ marginLeft: "40px" }}> 
  {experience.map((object) => 
  <li key={object}>{object}</li>)} </ul>
  return (
    <MainContainer>
      <ColumnTwo style={{ width: "100%", paddingLeft: "0px" }}>
        <SubTitle>{subtitle}</SubTitle>
        {content}
      </ColumnTwo>
    </MainContainer>
  );
};

export default ExperienceItem;
