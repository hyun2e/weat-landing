import React from "react";
import styled from "styled-components";

// 온보딩 카드 스타일
const OnboardingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
  }
`;

// 온보딩 컨텐츠 - 텍스트
const OnboardingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 401px;
  gap: 20px;
  order: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 1;
  }
`;

// 온보딩 컨텐츠 - 이미지
const OnboardingCardImage = styled.img`
  width: 335px;
  height: 200px;
  border-radius: 16px;
  border: none;
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 2;
  }
`;

// 온보딩 텍스트 - 본문
const OnboardingCardText = styled.p`
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.grey600};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs14};
  }
`;
// 온보딩 텍스트 - 제목
const OnboardingCardTitle = styled.h4`
  white-space: pre-line;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`;

const Card_onboarding = ({ icon, title, text }) => {
  return (
    <OnboardingCard>
      <OnboardingCardImage src={icon} />
      <OnboardingTextWrapper>
        <OnboardingCardTitle>{title}</OnboardingCardTitle>
        <OnboardingCardText>{text}</OnboardingCardText>
      </OnboardingTextWrapper>
    </OnboardingCard>
  );
};

export default Card_onboarding;
