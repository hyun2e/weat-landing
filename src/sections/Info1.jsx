import React from 'react'
import styled from 'styled-components';

const Info1Wrapper = styled.div`
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

const Image = styled.img`
  width: 21.5px; /* 이미지의 가로 크기 설정 */
  height: 21.5px; /* 이미지의 세로 크기 설정 */
`;

const Info1 = () => {
  return (
    <Info1Wrapper>

      <div>
      <Image src="src/assets/images/icon_question.svg" alt="image1" />
        <h2>
          다양한 건강식 메뉴를 외식으로 찾기 어려우신가요?
        </h2>
      </div>

      <div>
      <img src="src/assets/images/section2_domino.png" alt="second-image" />
      </div>
    </Info1Wrapper>
  )
}

export default Info1