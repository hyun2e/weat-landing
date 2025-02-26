import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";

// 전체 영역을 감싸는 Wrapper입니다.
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
  gap: 10px; /* 요소들 사이의 간격 */
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 0 20px 0;
`;

// 카드와 텍스트를 감싸는 영역입니다.
const QuizWrapper = styled.div`
  width: 100%;
  height: 275px;
  gap: 40px;
  padding: 30px 16px 20px 16px;
  margin: auto;
  display: flex;
  flex-direction: row; /* 가로로 나열 */
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 400px;
  }
`;

// 카드들을 담는 영역입니다.
const QuizCardWrapper = styled.div`
  width: 324px;
  height: 100%;
  margin-top: 20px;
  position: relative;
  overflow: visible; /* 카드가 움직여도 잘 보이게 합니다 */
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.fs28};
  font-weight: 700;
  line-height: 1.5; /* 1.5배 간격 */
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`;

// 텍스트 링크 스타일입니다.
const TextP = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs14};
  }
`;

// 텍스트 전체를 감싸는 영역입니다.
const TextWrapper = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column; /* 위에서 아래로 쌓입니다 */
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

/* 
   각 카드 컴포넌트는 초기에는 모두 부모의 중앙에 위치합니다.
   화면에 보이면 좌우로 이동하면서 약간 회전하는 애니메이션 효과가 나타납니다.
*/

// 왼쪽 카드는 unfold 상태일 때 왼쪽으로 이동하고 -15도 회전합니다.
const CardLeft = styled.img`
  position: absolute;
  left: 50%; /* 부모의 중앙 */
  top: 0;
  transform: ${({ $animate }) =>
    $animate
      ? "translateX(calc(-50% - 100px)) rotate(-15deg)" // unfold 상태: 왼쪽으로 100px 이동 후 회전
      : "translateX(-50%) rotate(0deg)"}; // 기본 상태: 중앙에 위치
  transition: transform 0.5s ease; /* 0.5초 동안 부드럽게 변화 */
  transition-delay: 0.2s; /* 약간의 딜레이 후 애니메이션 시작 */
`;

// 중앙 카드는 unfold 상태와 관계없이 중앙에 고정됩니다.
// $animate prop은 사용하지 않더라도 전달되지 않도록 합니다.
const CardCenter = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "$animate",
})`
  position: absolute;
  left: 50%; /* 부모의 중앙 */
  top: 0;
  transform: translateX(-50%) rotate(0deg);
  transition: transform 0.5s ease;
  transition-delay: 0.4s;
`;

// 오른쪽 카드는 unfold 상태일 때 오른쪽으로 이동하고 +15도 회전합니다.
const CardRight = styled.img`
  position: absolute;
  left: 50%; /* 부모의 중앙 */
  top: 0;
  transform: ${({ $animate }) =>
    $animate
      ? "translateX(calc(-50% + 100px)) rotate(15deg)" // unfold 상태: 오른쪽으로 100px 이동 후 회전
      : "translateX(-50%) rotate(0deg)"}; // 기본 상태: 중앙에 위치
  transition: transform 0.5s ease;
  transition-delay: 0.6s;
`;

const Quiz = () => {
  // inView: 카드 영역이 화면 안에 있는지(true) 없는지(false)를 저장합니다.
  const [inView, setInView] = useState(false);
  // cardRef: QuizCardWrapper에 연결해서 관찰할 요소를 가리킵니다.
  const cardRef = useRef(null);

  useEffect(() => {
    // Intersection Observer를 생성합니다.
    // 화면에 해당 영역이 30%(threshold: 0.3) 이상 보이면 entry.isIntersecting이 true가 됩니다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 화면에 보이면 true, 보이지 않으면 false로 상태를 변경합니다.
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    // cardRef가 연결된 요소를 관찰합니다.
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // 컴포넌트가 사라질 때 observer를 정리합니다.
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Wrapper>
      <QuizWrapper>
        {/* QuizCardWrapper에 ref를 연결하여 화면에 보이는지 관찰합니다. */}
        <QuizCardWrapper ref={cardRef}>
          {/* inView 상태(true/false)를 각 카드에 전달하여 애니메이션을 조절합니다. */}
          <CardLeft
            src="/assets/images/quizcard_1.svg"
            alt="spelling"
            $animate={inView}
          />
          <CardCenter
            src="/assets/images/quizcard_3.svg"
            alt="OX"
            $animate={inView}
          />
          <CardRight
            src="/assets/images/quizcard_2.svg"
            alt="picture"
            $animate={inView}
          />
        </QuizCardWrapper>
        <TextWrapper>
          <Texth2>
            퀴즈와 출석체크를 <br /> 통해서 포인트를 얻어보세요
          </Texth2>
          <TextP>
            퀴즈를 풀고 출석 체크하면 포인트가 쌓여요!
            <br /> 건강도 챙기고 혜택도 받아보세요.
          </TextP>
        </TextWrapper>
      </QuizWrapper>
      <Button type="outline-btn" href="https://www.figma.com/proto/NrEuIFexqypyInjjmqg408/3%EC%A1%B0?node-id=2481-5032&t=iBmMUsWcc8APvLs8-1" target = "_blank">
        포인트 획득하기
      </Button>
    </Wrapper>
  );
};

export default Quiz;
