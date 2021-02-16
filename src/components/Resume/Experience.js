import React from "react";
import { Container, ContainerWrapper, MainTitle } from "./Elements";
import ExperienceItem from "./ExperienceItem";

function Experience(props) {
  const content = props.data.map((object) => (
    <ExperienceItem {...object} key={object.subtitle} />
  ));
  return (
    <Container bgColor={props.bgColor} id="experience">
      <ContainerWrapper>
        <MainTitle>{props.title}</MainTitle>
        {content}
      </ContainerWrapper>
    </Container>
  );
}

export default Experience;
