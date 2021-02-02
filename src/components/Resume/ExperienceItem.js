import React from "react";
import { ColumnTwo, MainContainer, SubTitle } from "./MainElements";

const ExperienceItem = ({ subtitle, experience }) => {
  const content = experience.map((object) => <li key={object}>{object}</li>);
  return (
    <MainContainer>
      <ColumnTwo style={{ width: "100%", paddingLeft: "0px" }}>
        <SubTitle>{subtitle}</SubTitle>
        <ul style={{ marginLeft: "40px" }}> {content} </ul>
      </ColumnTwo>
    </MainContainer>
  );
};

export default ExperienceItem;
