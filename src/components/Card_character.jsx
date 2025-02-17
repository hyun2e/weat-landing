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
      <div>
        <div>
          <p>{text1}</p>
          <div>
            {/* 아이콘 배열을 순회하여 각 아이콘을 렌더링 */}
            {icons.map((icon, index) => (
              <Icon key={index} src={icon} alt={`icon-${index}`} />
            ))}
          </div>
        </div>
        <p>{text2}</p>
      </div>
    </Wrapper>
  );
};

export default Card_character;
