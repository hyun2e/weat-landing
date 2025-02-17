// src/components/Slider.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LeftArrowImg from "../assets/images/hero_left_arrow.png";
import RightArrowImg from "../assets/images/hero_right_arrow.png";
import Button from "./Button";

// 슬라이더 전체 컨테이너
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

// 슬라이드들을 감싸는 래퍼 (가로로 나열)
const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

// 개별 슬라이드 (배경 이미지로 src 프롭 사용)
const Slide = styled.div`
  min-width: 100%;
  height: 500px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.color || "#1A1A1A"};
`;

const HeroContent = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.color || "#1A1A1A"};
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

// 개별 도트
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
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
      <SlideWrapper translate={-currentIndex * 100}>
        {slides.map((slide, index) => {
          console.log(slide.button);

          return (
            <Slide key={index} src={slide.src}>
              <h1>{slide.title}</h1>
              <HeroContent>{slide.content}</HeroContent>
              {/* slide.button이 있다면 Button을 보여줘라 */}
              {slide.button && <Button>자세히 보기</Button>}
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
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Slider;
