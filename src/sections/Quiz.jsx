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
`;

// quizWrapper를 div로 변경
const QuizWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

// quizcardWrapper를 div로 변경
const QuizCardWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 이미지를 가로로 나열 */
  gap: 10px; /* 이미지 간 간격 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

const Quiz = () => {
  return (
    <Wrapper>
      <QuizWrapper>
        <QuizCardWrapper>
          <img src="src/assets/images/quizcard_1.png" alt="spelling" />
          <img src="src/assets/images/quizcard_3.png" alt="OX" />
          <img src="src/assets/images/quizcard_2.png" alt="picture" />
        </QuizCardWrapper>
        <div>
          <h2>
            퀴즈와 출석체크를 통해서 포인트를 얻어보세요
          </h2>
          <p>
            퀴즈를 풀고 출석 체크하면 포인트가 쌓여요! 건강도 챙기고 혜택도 받아보세요.
          </p>
        </div>
      </QuizWrapper>

      <Button type="outline-btn" href="/characters">
        포인트 획득하기
      </Button>
    </Wrapper>
  );
}

export default Quiz;
