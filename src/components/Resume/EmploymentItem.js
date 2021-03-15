import {
  ColumnOne,
  ColumnTwo,
  MainContainer,
  MainTitle,
  SubTitle,
  YearsPara,
} from "./MainElements";

const EmploymentItem = ({ jobRole, dates, companyName, experience }) => {
  const content = <ul style={{ marginLeft: "40px" }}> 
  {experience.map((object) => 
  <li key={object}>{object}</li>)} </ul>
  return (
    <MainContainer>
      <ColumnOne>
        <MainTitle>{jobRole}</MainTitle>
        <YearsPara>{dates}</YearsPara>
      </ColumnOne>
      <ColumnTwo>
        <SubTitle>{companyName}</SubTitle>
        {content}
      </ColumnTwo>
    </MainContainer>
  );
};

export default EmploymentItem;