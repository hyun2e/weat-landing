import React from "react";
import Card_onboarding from "../components/Card_onboarding";
import styled from "styled-components";

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 800px;
  gap: 40px;
  padding: 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const Onboarding = () => {
  const onboardingData = [
    {
      icon: "/assets/images/Health goals_img.svg",
      title: "건강 목표나 선호하는 \n 식단은 무엇인가요?",
      text: "건강 목표에 맞춰 최적의 식당을 추천해 드려요! \n 다이어트, 비건, 고단백, 저당, 장 건강 등 \n 원하는 식단을 설정해 보세요.",
    },
    {
      icon: "/assets/images/favorite food_img.svg",
      title: "좋아하는 음식의 \n 카테고리를 선택해주세요.",
      text: "원하는 음식 스타일을 선택하세요! \n 한식, 양식, 일식, 중식부터 샐러드, 스무디, 브런치까지 \n 다양한 건강식을 취향에 맞게 즐길 수 있어요.",
    },
    {
      icon: "/assets/images/Allergy_img.svg",
      title: "알러지나 피하고 싶은 \n음식이 있으신가요?",
      text: "알러지나 기피하는 음식을 설정하면 \n 안전하고 맛있는 건강식을 추천해 드려요!",
    },
  ];
  return (
    <OnboardingContainer>
      {onboardingData.map((item, index) => (
        <Card_onboarding
          icon={item.icon}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </OnboardingContainer>
  );
};

export default Onboarding;
