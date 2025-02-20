// src/components/Slider.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LeftArrowImg from "/assets/images/hero_left_arrow.png";
import RightArrowImg from "/assets/images/hero_right_arrow.png";
import Button from "./Button";

// 슬라이더 전체 컨테이너
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;

// 슬라이드들을 감싸는 래퍼 (가로로 나열)
// transient prop `$translate`를 사용하여 DOM으로 전달되지 않게 함
const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.$translate}%);
  @media (max-width: 768px) {
  }
`;

// 개별 슬라이드 (배경 이미지로 src 프롭 사용)
// transient props: `$image`, `$mobileimage`, `$index`
const Slide = styled.div`
  min-width: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: ${(props) => (props.$index === 3 ? "bottom" : "center")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 200px;
  padding-bottom: 400px;
  font-size: 32px;
  color: white;
  gap: 30px;

  @media (max-width: 768px) {
    background-image: url(${(props) => props.$mobileimage});
    padding-top: 100px;
    padding-bottom: 200px;
  }
`;

const UnvisibleDiv = styled.div`
  height: 60px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

// Title 컴포넌트: transient prop `$isActive`
const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#1A1A1A")};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

// HeroContent 컴포넌트: transient prop `$isActive`
const HeroContent = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#1A1A1A")};
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

// 좌측 화살표 버튼
const LeftArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: auto;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    visibility: hidden;
  }
`;

// 우측 화살표 버튼
const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: auto;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    visibility: hidden;
  }
`;

// 도트 네비게이션 컨테이너
const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

// 개별 도트: transient prop `$active` 사용
const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? "#1A1A1A" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
`;

const Slider = ({ slides, auto = false, duration = 10 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  // 도트 클릭 시 해당 슬라이드로 이동
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // auto가 true이면, duration(초)마다 자동 슬라이드 전환
  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        nextSlide();
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [auto, duration, length]);

  return (
    <SliderContainer>
      <SlideWrapper $translate={-currentIndex * 100}>
        {slides.map((slide, index) => {
          // 현재 슬라이드 활성화 여부 (필요에 따라 조건 변경 가능)
          const $isActive = index === 1;
          return (
            <Slide
              key={index}
              $index={index}
              $image={slide.src}
              $mobileimage={slide.mobileImage}
            >
              <TitleWrapper>
                <Title $isActive={$isActive}>{slide.title1}</Title>
                <Title $isActive={$isActive}>{slide.title2}</Title>
              </TitleWrapper>
              <ContentWrapper>
                <HeroContent $isActive={$isActive}>
                  {slide.content1}
                </HeroContent>
                <HeroContent $isActive={$isActive}>
                  {slide.content2}
                </HeroContent>
              </ContentWrapper>
              {slide.button ? (
                <Button type={slide.button.type} href={slide.button.href}>
                  위잇트로 바로가기
                </Button>
              ) : (
                <UnvisibleDiv />
              )}
            </Slide>
          );
        })}
      </SlideWrapper>
      <div className="slider">
        <LeftArrow src={LeftArrowImg} onClick={prevSlide} alt="Left Arrow" />
      </div>
      <div className="slider">
        <RightArrow src={RightArrowImg} onClick={nextSlide} alt="Right Arrow" />
      </div>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Slider;
