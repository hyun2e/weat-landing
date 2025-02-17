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
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 이미지를 가로로 나열 */
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  text-align: center;
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.fs28};
  font-weight: 600;
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

const Quiz = () => {
  return (
    <Wrapper>
      <QuizWrapper>
        <QuizCardWrapper>
          <img src="src/assets/images/quizcard_1.svg" alt="spelling" />
          <img src="src/assets/images/quizcard_3.svg" alt="OX" />
          <img src="src/assets/images/quizcard_2.svg" alt="picture" />
        </QuizCardWrapper>
        <TextWrapper>
          <Texth2>
            퀴즈와 출석체크를 통해서 포인트를 얻어보세요
          </Texth2>
          <TextP>
            퀴즈를 풀고 출석 체크하면 포인트가 쌓여요! 건강도 챙기고 혜택도 받아보세요.
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
