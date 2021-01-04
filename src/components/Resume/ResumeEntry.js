import React from "react";
import { Container, MainTitle, ContainerWrapper } from "./Elements";
import Main from "./Main";

const ResumeEntry = (props) => {
  const content = props.data.map((object) => (
    <Main {...object} key={object.mainTitle} />
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

export default ResumeEntry;
