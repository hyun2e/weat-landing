import React from "react";
import Card_Info2 from "../components/Card_info2";
import styled from "styled-components";
import { keyframes } from "styled-components";

const InfiniteScrollRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const InfiniteScrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Info2Container = styled.div`
  width: 100vw;
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
const Info2DataContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`
const Info2DataWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  animation: ${InfiniteScrollRight} 230s linear infinite;
`
const Info2DataWrapperLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  animation: ${InfiniteScrollLeft} 300s linear infinite;
`;

// 인포2 제목 스타일
const Info2Tile = styled.h2`
  line-height: 1.5;
`

const Info2 = () => {
  const info2DataTop = [
    { icon: "src/assets/images/icon_1.svg", text: "좋아하는 음식을 \n 설정하면 추천해줘요" },
    { icon: "src/assets/images/icon_2.svg", text: "알러지와 기피하고 싶은 \n 음식도 반영해줘요" },
    { icon: "src/assets/images/icon_3.svg", text: "건강 목표를 설정하고 \n 목표에 맞춘 식당을 보여줘요" },
    { icon: "src/assets/images/icon_1.svg", text: "좋아하는 음식을 \n 설정하면 추천해줘요" },
    { icon: "src/assets/images/icon_2.svg", text: "알러지와 기피하고 싶은 \n 음식도 반영해줘요" },
    { icon: "src/assets/images/icon_3.svg", text: "건강 목표를 설정하고 \n 목표에 맞춘 식당을 보여줘요" }
  ];

  const info2DataBottom = [
    { icon: "src/assets/images/icon_4.svg", text: "퀴즈와 출석체크를 \n 통해 포인트를 모아보세요" },
    { icon: "src/assets/images/icon_5.svg", text: "건강식 키워드로 \n 탐색할 수 있어요" },
    { icon: "src/assets/images/icon_6.svg", text: "신뢰도 높은 리뷰를 \n 확인할 수 있어요" },
    { icon: "src/assets/images/icon_7.svg", text: "귀여운 캐릭터를 \n 키울 수 있어요" },
    { icon: "src/assets/images/icon_4.svg", text: "퀴즈와 출석체크를 \n 통해 포인트를 모아보세요" },
    { icon: "src/assets/images/icon_5.svg", text: "건강식 키워드로 \n 탐색할 수 있어요" },
    { icon: "src/assets/images/icon_6.svg", text: "신뢰도 높은 리뷰를 \n 확인할 수 있어요" },
    { icon: "src/assets/images/icon_7.svg", text: "귀여운 캐릭터를 \n 키울 수 있어요" }
  ];

  const repeatedDataTop = [...info2DataTop, ...info2DataTop, ...info2DataTop, ...info2DataTop];
  const repeatedDataBottom = [...info2DataBottom, ...info2DataBottom, ...info2DataBottom, ...info2DataBottom];

  return (
    <Info2Container>
      <Info2Tile>Weat에서 다 해결했어요</Info2Tile>
      <Info2DataContainer>
        <Info2DataWrapperRight>
          {repeatedDataTop.map((item,index)=>(
            <Card_Info2 icon={item.icon} text={item.text} key={index}/>
          ))}
        </Info2DataWrapperRight>
        <Info2DataWrapperLeft>
          {repeatedDataBottom.map((item,index)=>(
            <Card_Info2 icon={item.icon} text={item.text} key={index}/>
          ))}
        </Info2DataWrapperLeft>
      </Info2DataContainer>
    </Info2Container>
  );
};

export default Info2;
