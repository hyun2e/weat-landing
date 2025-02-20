/* 

보여주고 싶은 내용을 여러 번 복제
복제된 아이템들을 한 줄로 배열
아이템들이 왼쪽이나 오른쪽으로 일정한 속도로 계속 움직이게 애니메이션을 만듭니다.
애니메이션이 한 바퀴 돌면 다시 처음 위치로 돌아오도록 설정하여,
끝없이 반복되는(무한 스크롤) 효과를 냅니다.

*/
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// 바깥쪽 컨테이너: 넘치는 부분은 보이지 않도록 합니다.
const OuterContainer = styled.div`
  overflow: hidden; /* 넘치는 내용은 숨겨요 */
  width: 100%; /* 화면 전체 너비 */
`;

/* 
  scrollLeft 함수: 왼쪽으로 움직이는 애니메이션을 만듭니다.
  $initialOffset: 시작 위치, $singleWidth: 한 개 아이템의 너비
*/
const scrollLeft = ($initialOffset, $singleWidth) => keyframes`
  from {
    transform: translateX(${$initialOffset}px);
  }
  to {
    transform: translateX(${$initialOffset - $singleWidth}px);
  }
`;

/* 
  scrollRight 함수: 오른쪽으로 움직이는 애니메이션을 만듭니다.
  $initialOffset: 시작 위치, $singleWidth: 한 개 아이템의 너비
*/
const scrollRight = ($initialOffset, $singleWidth) => keyframes`
  from {
    transform: translateX(${$initialOffset}px);
  }
  to {
    transform: translateX(${$initialOffset + $singleWidth}px);
  }
`;

/* 
  ScrollingContainer 컴포넌트: 아이템들이 나란히 배열되어 움직이는 영역입니다.
  gap: 아이템들 사이의 간격을 만듭니다.
  아래에서 사용되는 커스텀 prop들은 transient prop($ 접두사)을 사용하여 DOM으로 전달되지 않습니다.
*/
const ScrollingContainer = styled.div`
  display: flex; /* 아이템들을 가로로 배열합니다 */
  gap: 12px; /* 아이템들 사이에 12px 간격 */
  will-change: transform; /* 애니메이션을 위해 준비합니다 */
  ${({ $singleWidth, $duration, $direction, $initialOffset }) =>
    $singleWidth &&
    $duration &&
    css`
      animation: ${$direction === "left"
          ? scrollLeft($initialOffset, $singleWidth)
          : scrollRight($initialOffset, $singleWidth)}
        ${$duration}s linear infinite;
      transform: translateX(${$initialOffset}px);
    `}
`;

/* 
  InfiniteScrollWrapper 컴포넌트: 
  자식 요소(children)를 복제하여 무한으로 움직이게 하는 역할을 합니다.
  
  direction: 움직이는 방향 ("left" 또는 "right")
  speed: 움직이는 속도 (픽셀/초)
*/
const InfiniteScrollWrapper = ({
  children,
  direction = "left",
  speed = 50,
}) => {
  // containerRef: ScrollingContainer를 참조하기 위한 변수입니다.
  const containerRef = useRef(null);
  // 한 아이템의 너비를 저장하는 상태입니다.
  const [singleWidth, setSingleWidth] = useState(0);
  // 애니메이션이 한 번 도는 시간(초)을 저장하는 상태입니다.
  const [duration, setDuration] = useState(0);
  // 애니메이션 시작할 때의 x축 위치를 저장합니다.
  // 왼쪽으로 움직일 때는 중앙에서 시작합니다.
  const [initialOffset, setInitialOffset] = useState(0);

  // 몇 번 복제할지 정합니다. 여기서는 10번 복제합니다.
  const copies = 10;
  // 복제된 것 중 가운데 번호를 계산합니다.
  const middle = Math.floor(copies / 2);

  useEffect(() => {
    // containerRef.current가 준비되면 실행됩니다.
    if (containerRef.current) {
      // 전체 아이템의 총 너비를 가져옵니다.
      const totalWidth = containerRef.current.scrollWidth;
      // 한 아이템의 너비 = 전체 너비 / 복제 횟수
      const calculatedSingleWidth = totalWidth / copies;
      setSingleWidth(calculatedSingleWidth);
      // 애니메이션 시간 = 한 아이템의 너비 / 속도 (speed는 픽셀/초)
      setDuration(calculatedSingleWidth / speed);
      // 왼쪽으로 움직일 때는 중앙 아이템이 화면에 보이도록 시작 위치를 설정합니다.
      setInitialOffset(-middle * calculatedSingleWidth);
    }
  }, [children, speed, copies, middle, direction]);

  /* 
    왼쪽 방향 애니메이션에서 한 사이클이 끝나면 실행되는 함수입니다.
    이 함수는 애니메이션이 끝나면 다시 처음 위치(0)로 돌려놓습니다.
  */
  const handleAnimationIteration = () => {
    if (direction === "left") {
      setInitialOffset(0);
    }
  };

  return (
    <OuterContainer>
      <ScrollingContainer
        ref={containerRef}
        $singleWidth={singleWidth}
        $duration={duration}
        $direction={direction}
        $initialOffset={initialOffset}
        // direction이 "left"일 때, 애니메이션 한 사이클이 끝나면 handleAnimationIteration 실행
        onAnimationIteration={
          direction === "left" ? handleAnimationIteration : undefined
        }
      >
        {/* copies(복제 횟수)만큼 children을 반복해서 출력합니다. */}
        {Array.from({ length: copies }).map((_, index) => (
          <React.Fragment key={index}>{children}</React.Fragment>
        ))}
      </ScrollingContainer>
    </OuterContainer>
  );
};

export default InfiniteScrollWrapper;
