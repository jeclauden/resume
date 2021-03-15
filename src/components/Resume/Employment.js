import React from "react";
import { ContainerWrapper } from "./Elements";
import EmploymentItem from "./EmploymentItem";

const Employment = (props) => {
  const content = props.data.map((object) => (
    <EmploymentItem {...object} key={object.companyName} />
  ));
  return (
      <ContainerWrapper style={{width: "100%"}}>
        {content}
      </ContainerWrapper>
  );
};

export default Employment;
