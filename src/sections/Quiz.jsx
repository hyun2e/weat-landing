import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
  gap: 10px; /* 이미지 간 간격 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  padding: 0 0 20px 0;
`;

// quizWrapper를 div로 변경
const QuizWrapper = styled.div`
  width: 100%;
  height: 275px;
  gap: 30px;
  padding: 40px 16px 20px 16px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

// quizcardWrapper를 div로 변경
const QuizCardWrapper = styled.div`
  width: 324px;
  height: 200px; /* 이미지 크기에 맞는 높이 설정 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative; /* 상대 위치 지정 */
`;


const TextP = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  text-align: center;
`;

const TextWrapper = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
  gap: 10px;
`;

const Quiz = () => {
  return (
    <Wrapper>
      <QuizWrapper>
        <QuizCardWrapper>
        <img
  src="src/assets/images/quizcard_1.svg"
  alt="spelling"
  style={{
    position: 'absolute',
    right: '70px', // 첫 번째 이미지 (스펠링), 살짝 왼쪽으로 배치
    zIndex: 0, // 뒤쪽으로 배치
  }}
/>
<img
  src="src/assets/images/quizcard_3.svg"
  alt="OX"
  style={{
    position: 'absolute',
    left: '50%', // OX 이미지를 가로 중앙에 배치
    transform: 'translateX(-50%)', // 중앙 정렬을 위해 이동
    zIndex: 2, // 가장 앞에 배치
  }}
/>
<img
  src="src/assets/images/quizcard_2.svg"
  alt="picture"
  style={{
    position: 'absolute',
    left: '70px', // 세 번째 이미지 (사진), 살짝 오른쪽으로 배치
    zIndex: 1, // 뒤쪽에 배치
  }}
/>

        </QuizCardWrapper>
        <TextWrapper>
          <h2>
            퀴즈와 출석체크를 <br /> 통해서 포인트를 얻어보세요
          </h2>
          <TextP>
            퀴즈를 풀고 출석 체크하면 포인트가 쌓여요!<br /> 건강도 챙기고 혜택도 받아보세요.
          </TextP>
        </TextWrapper>
      </QuizWrapper>

      <Button type="outline-btn" href="/characters">
        포인트 획득하기
      </Button>
    </Wrapper>
  );
}

export default Quiz;
