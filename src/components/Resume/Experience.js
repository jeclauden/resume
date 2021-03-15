import React from "react";
import { Container, ContainerWrapper, MainTitle } from "./Elements";
import ExperienceItem from "./ExperienceItem";
import {EmploymentObjects} from "./ResumeData";
import Employment from "./Employment";

function Experience(props) {
  const content = props.data.map((object) => (
    <ExperienceItem {...object} key={object.subtitle} />
  ));
  return (
    <Container bgColor={props.bgColor} id="experience">
      <ContainerWrapper>
        <MainTitle>Employment</MainTitle>
        <Employment data={EmploymentObjects} />
        <MainTitle>{props.title}</MainTitle>
        {content}
      </ContainerWrapper>
    </Container>
  );
}

export default Experience;
