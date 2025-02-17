// src/App.jsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Info1 from "./sections/Info1";
import Info2 from "./sections/Info2";
import Onboarding from "./sections/Onboarding";
import Category from "./sections/Category";
import Review from "./sections/Review";
import Chip from "./components/Chip";
import Quiz from "./sections/Quiz";
import Character from "./sections/Character";
import Download from "./sections/Download";
import Footer from "./sections/Footer";



// 예시 슬라이드 데이터: src 값으로 정적인 이미지 URL을 사용합니다.
const slidesHero = [
  {
    src: "src/assets/images/hero01.png",
    title: "건강식을 찾고 있다면 위잇트에서 찾아보세요!",
    content: "당신만을 위한 맞춤형 건강식당 서비스",
  },
  {
    src: "src/assets/images/hero02.png",
    title: "샐러드만 건강식이라는 생각은 NO!",
    content: "위잇트에서 다양하고 맛있는 건강식의 세계를 보여드릴게요",
  },
  {
    src: "src/assets/images/map.png",
    title: "지도로 한눈에 보기 쉬운 맛집탐방",
    content: "당신만을 위한 맞춤형 건강식당 서비스",
  },
  {
    src: "src/assets/images/quiz.png",
    title: "퀴즈도 풀고, 건강식 정보도 얻고",
    content: "퀴즈에서 얻은 포인트로 귀여운 캐릭터 지금 만나러 가보실까요?",
  },
  {
    src: "src/assets/images/review.png",
    title: "위잇트에서 더 많은 이야기를 나눠보세요",
    content: "식당 리뷰와 건강식 레시피를 공유하며 더 건강하게!",
  },
];

const Section = styled.section`
  height: 500px;
  background-color: ${({ $bgColor }) => $bgColor || "#1d94d9"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 32px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* 반응형 스타일: 모바일 화면 (화면 폭 <= 768px)에서는 높이와 폰트 크기를 조정 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    font-size: 20px;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Hero />
        {/* <Slider slides={slidesHero} duration={1} /> */}
        <Info1 />
        <Info2 />
        <Onboarding />
        <Category />
        <Review />
        <Chip />
        <Quiz />
        <Character />
        <Download />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
