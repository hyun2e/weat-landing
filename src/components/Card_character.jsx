import React from "react";
import styled from "styled-components";

const PlantWrapper = styled.div`
  background-color: #fff7f2; /* 색상에 따옴표가 필요없음 */
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
  margin: 0;
`;

const Wrapper = styled.div`
  width: 329px;
  height: 86px;
  padding: 0 12px;
  display: grid;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey200};
  grid-template-columns: 61px 1fr; /* 2개의 열로 가로로 나열 */
  gap: 24px 10px; /* 상하 간격 24px, 좌우 간격 6px */
  justify-content: center; /* 가로로 가운데 정렬 */
  align-items: center; /* 세로로 위쪽 정렬 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.fs16};
  font-weight: 700;
  line-height: 1.5; /* 1.5배 간격 */
  text-align: center;
`;

const TextP2 = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs11};
  font-weight: 400;
  text-align: center;
`;

const ICONWrapper = styled.div`
  display: flex; /* flexbox로 설정 */
  flex-direction: row;
  width: 124px;
  height: 22px;
  gap: 10px;
  align-items: flex-end;
  text-align: center;
  justify-content: center;
`;

const SmallWrapper = styled.div`
  height: 20px;
  align-items: flex-end;
  text-align: center;
  justify-content: center;
`;

const Card_character = ({ text1, text2, icons, plant }) => {
  return (
    <Wrapper>
      <PlantWrapper>
        <img src={plant} alt="plant" />
      </PlantWrapper>
      <div>
        <ICONWrapper>
          <Texth2>{text1}</Texth2>
          <SmallWrapper>
            {/* 아이콘 배열을 순회하여 각 아이콘을 렌더링 */}
            {icons.map((icon, index) => (
              <Icon key={index} src={icon} alt={`icon-${index}`} />
            ))}
          </SmallWrapper>
        </ICONWrapper>
        <TextP2>{text2}</TextP2>
      </div>
    </Wrapper>
  );
};

export default Card_character;
