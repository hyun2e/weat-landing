// src/sections/Info2.jsx
import React from "react";
import styled from "styled-components";
import InfiniteScrollWrapper from "../util/InfiniteScrollWrapper";
import Card_Info2 from "../components/Card_Info2";

const Info2Container = styled.div`
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 24px;
  }
`;

const Info2Title = styled.h2`
  line-height: 1.5;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`;

const Info2DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
  }
`;

const Info2 = () => {
  const info2DataTop = [
    {
      icon: "/assets/images/icon_1.svg",
      text: "좋아하는 음식을 \n 설정하면 추천해줘요",
    },
    {
      icon: "/assets/images/icon_2.svg",
      text: "알러지와 기피하고 싶은 \n 음식도 반영해줘요",
    },
    {
      icon: "/assets/images/icon_3.svg",
      text: "건강 목표를 설정하고 \n 목표에 맞춘 식당을 보여줘요",
    },
  ];

  const info2DataBottom = [
    {
      icon: "/assets/images/icon_4.svg",
      text: "퀴즈와 출석체크를 \n 통해 포인트를 모아보세요",
    },
    {
      icon: "/assets/images/icon_5.svg",
      text: "건강식 키워드로 \n 탐색할 수 있어요",
    },
    {
      icon: "/assets/images/icon_6.svg",
      text: "신뢰도 높은 리뷰를 \n 확인할 수 있어요",
    },
    {
      icon: "/assets/images/icon_7.svg",
      text: "귀여운 캐릭터를 \n 키울 수 있어요",
    },
  ];

  return (
    <Info2Container>
      <Info2Title>Weat에서 다 해결했어요</Info2Title>
      <Info2DataContainer>
        <InfiniteScrollWrapper direction="left" speed={20}>
          {info2DataTop.map((item, index) => (
            <Card_Info2
              key={`top-${index}`}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </InfiniteScrollWrapper>
        <InfiniteScrollWrapper direction="right" speed={20}>
          {info2DataBottom.map((item, index) => (
            <Card_Info2
              key={`bottom-${index}`}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </InfiniteScrollWrapper>
      </Info2DataContainer>
    </Info2Container>
  );
};

export default Info2;
