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

const Main = () => {
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
        <MainTitle>University of South Australia</MainTitle>
        <YearsPara>Aug 2006 - Jan 2007</YearsPara>
      </ColumnOne>
      <ColumnTwo>
        <SubTitle>Software Development</SubTitle>
        <Description>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book
        </Description>
      </ColumnTwo>
    </MainContainer>
  );
};

export default Main;
