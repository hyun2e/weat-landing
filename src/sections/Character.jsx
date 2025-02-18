import React, { useState } from 'react';
import Button from '../components/Button';
import Card_character from '../components/Card_character';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 28px; /* 이미지 간 간격 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

const CardWrapper = styled.div`
  margin: auto;
  display: grid;
  gap: 6px 24px; /* 상하 간격 24px, 좌우 간격 6px */
  grid-template-columns: repeat(2, 1fr); /* 3개의 이미지를 가로로 나열 */
  grid-template-rows: repeat(1, 1fr); /* 2개의 행을 세로로 나열 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

const CharacterWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row; /* 가로로 배치 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  gap: 10px; /* 이미지 간의 간격 */
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.fs28};
  font-weight: 700;
  text-align: center;
`;

const Texth3 = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs24};
  font-weight: 500;
  text-align: center;
`;

const TextP = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  text-align: center;
`;

const TextWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  gap: 10px;
`;

const BottomWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  gap: 10px;
`;

const Character = () => {
  const [hoveredImage, setHoveredImage] = useState(null); // 호버된 이미지 상태 관리

  const handleMouseEnter = (imageName) => {
    setHoveredImage(imageName); // 호버된 이미지 변경
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // 호버를 벗어나면 원래 이미지로 복원
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Texth2>포인트를 모아서 <br />4종 랜덤 위펫을 만나보세요!</Texth2>
        <TextP>포인트를 모으면 화분에서 꽃이 자라고,랜덤 위펫 등장해요! <br />🌱🍅🥕🥦 어떤 친구가 나올지 기대해 보세요!</TextP>
      </TextWrapper>

      <CardWrapper>
        <Card_character
          plant="src/assets/images/Flower_Level1.svg"
          text1="Lv.1"
          icons={[
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
          ]}
          text2="작은 씨앗에서 새로운 생명의 시작을 느껴보세요!"
        />
        <Card_character
          plant="src/assets/images/Flower_Level2.svg"
          text1="Lv.2"
          icons={[
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
          ]}
          text2="첫 싹이 틀 때, 당신의 식물도 함께 자라기 시작합니다!"
        />
        <Card_character
          plant="src/assets/images/Flower_Level3.svg"
          text1="Lv.3"
          icons={[
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart grey.svg",
            "src/assets/images/icon_Heart grey.svg",
          ]}
          text2="싹에서 꽃 봉우리가 싹트기 시작했습니다!"
        />
        <Card_character
          plant="src/assets/images/Flower_Level4.svg"
          text1="Lv.4"
          icons={[
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart grey.svg",
          ]}
          text2="아름다운 꽃이 만개할 순간이 가까워졌습니다!"
        />
        <Card_character
          plant="src/assets/images/Flower_riddle.svg"
          text1="Lv.5"
          icons={[
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
            "src/assets/images/icon_Heart.svg",
          ]}
          text2="아름다운 꽃이 어떤 열매를 맺었을까요?"
        />
      </CardWrapper>

      <BottomWrapper>
        <Texth3>여러분을 기다리는 위펫은 어떤 모습일까요?</Texth3>
        <img src="src/assets/images/CursorClick.svg" alt="CursorClick" />
      </BottomWrapper>

      <CharacterWrapper>
        <img
          src={hoveredImage === 'catrot' ? 'src/assets/images/catrot_active.svg' : 'src/assets/images/catrot_inactive.svg'}
          alt="catrot"
          onMouseEnter={() => handleMouseEnter('catrot')} // 호버 시 이미지 변경
          onMouseLeave={handleMouseLeave} // 호버 벗어날 때 원래 이미지로 변경
        />
        <img
          src={hoveredImage === 'gomato' ? 'src/assets/images/gomato_active.svg' : 'src/assets/images/gomato_inactive.svg'}
          alt="gomato"
          onMouseEnter={() => handleMouseEnter('gomato')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'buldocoli' ? 'src/assets/images/buldocoli_active.svg' : 'src/assets/images/buldocoli_inactive.svg'}
          alt="buldocoli"
          onMouseEnter={() => handleMouseEnter('buldocoli')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'radigi' ? 'src/assets/images/radigi_active.svg' : 'src/assets/images/radigi_inactive.svg'}
          alt="radigi"
          onMouseEnter={() => handleMouseEnter('radigi')}
          onMouseLeave={handleMouseLeave}
        />
      </CharacterWrapper>

      <Button type="outline-btn" href="/characters">
        위펫 만나러가기
      </Button>
    </Wrapper>
  );
};

export default Character;
