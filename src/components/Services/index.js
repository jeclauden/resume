import React from "react";
import IconOne from "../../images/svg-5.svg";
import IconTwo from "../../images/svg-6.svg";
import IconThree from "../../images/svg-7.svg";
import {
  ServicesContainer,
  ServicesHeader,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesCardHeader,
  ServicesParag,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeader>Our Services</ServicesHeader>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={IconOne} />
          <ServicesCardHeader>Reduce Expenses</ServicesCardHeader>
          <ServicesParag>
            We help reduce you fees and increase your overall revenue
          </ServicesParag>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={IconTwo} />
          <ServicesCardHeader>Virtual Offices</ServicesCardHeader>
          <ServicesParag>
            YOu can access our platfom online anywhere in the world
          </ServicesParag>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={IconThree} />
          <ServicesCardHeader>Premium Benefits</ServicesCardHeader>
          <ServicesParag>
            Do whater you want with your money. No strings attached
          </ServicesParag>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
