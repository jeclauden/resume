import React from "react";
import {
  ColumnOne,
  ColumnTwo,
  Description,
  MainContainer,
  MainTitle,
  SubTitle,
  YearsPara,
} from "./MainElements";

const Main = ({ mainTitle, years, subtitle, description }) => {
  const ColoredLine = () => (
    <hr
      style={{
        color: "red",
        backgroundColor: "red",
        height: 5,
      }}
    />
  );
  return (
    <MainContainer>
      <ColumnOne>
        <MainTitle>{mainTitle}</MainTitle>
        <YearsPara>{years}</YearsPara>
      </ColumnOne>
      <ColumnTwo>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{description}</Description>
      </ColumnTwo>
    </MainContainer>
  );
};

export default Main;
