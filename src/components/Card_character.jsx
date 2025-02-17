import React from "react";
import styled from "styled-components";

const PlantWrapper = styled.div`
  background-color: #FFF7F2; /* 색상에 따옴표가 필요없음 */
  padding: 4px; /* 따옴표가 필요 없음 */
  border-radius: 9px; /* 따옴표가 필요 없음 */
  display: inline-block;
  height: 61px; /* 따옴표가 필요 없음 */
  width: 61px; /* 따옴표가 필요 없음 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 16.5px; /* 아이콘 크기 설정 */
  height: 16.5px; /* 아이콘 크기 설정 */
  margin: 1px, 2px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  gap: 18px;
  grid-template-columns: 61px 1fr;; /* 2개의 열로 가로로 나열 */
  justify-content: flex-start; /* 가로로 왼쪽 정렬 */
  align-items: flex-start; /* 세로로 위쪽 정렬 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.fs16};
  font-weight: 600;
  text-align: center;
`;

const TextP2 = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs11};
  font-weight: 400;
  text-align: center;
`;

const MainWrapper = styled.div`
  gap: 0px;
`;

const Card_character = ({ text1, text2, icons, plant }) => {
  console.log(text1);
  console.log(text2);
  console.log(plant);
  console.log(icons);

  return (
    <Wrapper>
      <PlantWrapper>
        <img src={plant} alt="plant" />
      </PlantWrapper>
      <MainWrapper>
        <div>
          <Texth2>{text1}</Texth2>
          <div>
            {/* 아이콘 배열을 순회하여 각 아이콘을 렌더링 */}
            {icons.map((icon, index) => (
              <Icon key={index} src={icon} alt={`icon-${index}`} />
            ))}
          </div>
        </div>
        <TextP2>{text2}</TextP2>
      </MainWrapper>
    </Wrapper>
  );
};

export default Card_character;
