import styled from "styled-components";
import { flexDisplay, normalFlex } from "../../GlobalElements";

export const Container = styled.div`
  background: ${(props) => props.bgColor};
  ${flexDisplay}
`;

export const ContainerWrapper = styled.div`
  ${normalFlex}
  width: 80%;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const MainTitle = styled.h3`
  font-weight: 300;
  font-size: 28px;
  color: #118ab2;
  line-height: 1.1;
  padding: 24px 0;
`;
