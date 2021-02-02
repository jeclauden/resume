import React from "react";
import { Container, MainTitle, ContainerWrapper } from "./Elements";
import EducationItem from "./EducationItem";

const Education = (props) => {
  const content = props.data.map((object) => (
    <EducationItem {...object} key={object.mainTitle} />
  ));
  return (
    <Container bgColor={props.bgColor} id={props.title.toLowerCase()}>
      <ContainerWrapper>
        <MainTitle>{props.title}</MainTitle>
        {content}
      </ContainerWrapper>
    </Container>
  );
};

export default Education;
