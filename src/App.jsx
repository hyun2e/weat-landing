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
    title: "건강식을 찾고 있다면 위잇트에~~",
    content: "당신만을 위한 맞춤형 건강식~",
  },
  { src: "https://placehold.co/600x400/blue/yellow", content: "Slide 2" },
  { src: "https://placehold.co/600x400/green/black", content: "Slide 3" },
  { src: "https://placehold.co/600x400/red/white", content: "Slide 4" },
  { src: "https://placehold.co/600x400/black/white", content: "Slide 5" },
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
        <Slider slides={slidesHero} duration={1} />
        <Hero />
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
