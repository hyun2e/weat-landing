// src/App.jsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Header from "./sections/Header";
import Button from "./components/Button";
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
import Slider from "./components/Slider";

// 예시 슬라이드 데이터: src 값으로 정적인 이미지 URL을 사용합니다.
// button이 있는 슬라이드는 button:{}으로 버튼 키밸류 추가하기
const slides = [
  {
    id: 1,
    src: "src/assets/images/PC_hero_1.png",
    mobileImage: "src/assets/images/MO_hero_1.png",
    title1: "건강식을 찾고 있다면 ",
    title2: "위잇트에서 찾아보세요!",
    content1: "당신만을 위한 ",
    content2: "맞춤형 건강식당 서비스",
    button: {
      type: "hero-btn1",
      href: "https://www.naver.com",
    },
  },
  {
    id: 2,
    src: "src/assets/images/PC_hero_2.png",
    mobileImage: "src/assets/images/MO_hero_2.png",
    title1: "샐러드만 건강식이라는 ",
    title2: "생각은 NO! ",
    content1: "위잇트에서 다양하고 맛있는 ",
    content2: "건강식의 세계를 보여드릴게요 ",
    button: {
      type: "hero-btn2",
    },
  },
  {
    id: 3,
    src: "src/assets/images/PC_hero_3.png",
    mobileImage: "src/assets/images/MO_hero_3.png",
    title1: "지도로 한눈에 ",
    title2: "보기 쉬운 맛집탐방 ",
    content1: "당신만을 위한 ",
    content2: "맞춤형 건강식당 서비스 ",
  },
  {
    id: 4,
    src: "src/assets/images/PC_hero_4.png",
    mobileImage: "src/assets/images/MO_hero_4.png",
    title1: "퀴즈도 풀고, ",
    title2: "건강식 정보도 얻고 ",
    content1: "퀴즈에서 얻은 포인트로 ",
    content1: "귀여운 캐릭터 지금 만나러 가보실까요? ",
    button: {
      type: "hero-btn3",
    },
  },
  {
    id: 5,
    src: "src/assets/images/PC_hero_5.png",
    mobileImage: "src/assets/images/MO_hero_5.png",
    title1: "위잇트에서 더 많은 ",
    title2: "이야기를 나눠보세요 ",
    content1: "식당 리뷰와 건강식 레시피를 ",
    content2: "공유하며 더 건강하게! ",
  },
];

const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 64px;
  }
`;

const Section = styled.section`
  height: 500px;
  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 32px;
  color: #ffffff;

  /* 반응형 스타일: 모바일 화면 (화면 폭 <= 768px)에서는 높이와 폰트 크기를 조정 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 440px;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <ContentWrapper>
          <div>
            <Section id="section-hero">
              <Slider slides={slides} auto={true} duration={10} />
            </Section>
            <Info1 id="section-about" />
          </div>
          <Info2 />
          <Onboarding />
          <Category />
          <Review id="section-community" />
          <Quiz id="section-challenge" />
          <Character />
          <Download id="section-download" />
          <Footer />
        </ContentWrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
