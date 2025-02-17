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
  gap:20px;
`;

const OnboardingCardImage = styled.img`
  width: 335px;
  height: 200px;
  border-radius: 16px;
  border: none;
`

const Card_onboarding = ({icon,title,text}) => {
  return (
    <OnboardingCard>
      <OnboardingCardImage src={icon} />
      <OnboardingTextWarpper>
        <h4>{title}</h4>
        <p>{text}</p>
      </OnboardingTextWarpper>
    </OnboardingCard>
  );
};

export default Card_onboarding;
