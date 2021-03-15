import {
  ColumnOne,
  ColumnTwo,
  Description,
  MainContainer,
  MainTitle,
  SubTitle,
  YearsPara,
} from "./MainElements";

const EducationItem = ({ mainTitle, years, subtitle, description }) => {
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

export default EducationItem;
