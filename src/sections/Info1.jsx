import React from 'react'
import styled from 'styled-components';
import Header from './Header';

const Info1Wrapper = styled.div`
  width: 100%;
  height: 572px;
  margin: auto;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary400};
  background-image: url("src/assets/images/pc_section2 bg.png");
  background-size: cover; /* 이미지 크기를 부모 요소에 맞게 조정 */
  background-position: center; /* 이미지가 부모 요소의 가운데에 위치하도록 설정 */
  background-repeat: no-repeat; /* 배경 이미지 반복 안 함 */
`;

const GraWrapper = styled.div`
  width: 100%;
  height: 572px;
  margin: auto;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;

  background-image: url("src/assets/images/pc_section2 bg.png");
  background-size: cover; /* 이미지 크기를 부모 요소에 맞게 조정 */
  background-position: center; /* 이미지가 부모 요소의 가운데에 위치하도록 설정 */
  background-repeat: no-repeat; /* 배경 이미지 반복 안 함 */
`;

const HeaderWrapper = styled.div`
  margin: auto;
  display: grid;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

const Image = styled.img`
  margin: auto;
  display: grid;
  width: 21.5px; /* 이미지의 가로 크기 설정 */
  height: 21.5px; /* 이미지의 세로 크기 설정 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  
`;

const ImageOP = styled.img`
  margin: auto;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.fs28};
  font-weight: 600;
  text-align: center;
`;

const Info1 = () => {
  return (
    <Info1Wrapper>
      <HeaderWrapper>
      <Image src="src/assets/images/icon_question.svg" alt="image1" />
        <Texth2>
          다양한 건강식 메뉴를 외식으로 찾기 어려우신가요?
        </Texth2>
      </HeaderWrapper>

      <div>
      <ImageOP src="src/assets/images/section2_domino.svg" alt="second-image" />
      </div>
    </Info1Wrapper>
  )
}

export default Info1