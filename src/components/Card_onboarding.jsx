import React from "react";
import styled from "styled-components";

const OnboardingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const OnboardingTextWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


const Card_onboarding = ({icon,title,text}) => {
  return (
    <OnboardingCard>
      <img src={icon} />
      <OnboardingTextWarpper>
        <h4>{title}</h4>
        <p>{text}</p>
      </OnboardingTextWarpper>
    </OnboardingCard>
  );
};

export default Card_onboarding;
