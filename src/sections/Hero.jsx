// src/sections/Hero.jsx

import React from "react";
import Button from "../components/Button"; // Button 컴포넌트 가져오기

const Hero = () => {
  return (
    <section>
      <div>
        <h1>건강식을 찾고 있다면 위잇트에서 찾아보세요!</h1>
        <p>당신만을 위한 맞춤형 건강식당 서비스</p>
        <Button type="hero-btn1">위잇트로 바로가기</Button>
      </div>
      <div>
        <h1>샐러드만 건강식이라는 생각은 NO!</h1>
        <p>위잇트에서 다양하고 맛있는<br />건강식의 세계를 보여드릴게요</p>
        <Button type="hero-btn2">위잇트로 바로가기</Button>
      </div>
      <div>
        <h1>지도로 한눈에 보기 쉬운 맛집탐방</h1>
        <p>당신만을 위한 맞춤형 건강식당 서비스</p>
      </div>
      <div>
        <img src="/path-to-logo.png" alt="맵이미지" />
      </div>
      <div>
        <h1>퀴즈도 풀고, 건강식 정보도 얻고</h1>
        <p>퀴즈에서 얻은 포인트로 귀여운 캐릭터 지금 만나러 가보실까요?</p>
        <Button type="hero-btn3">위잇트로 바로가기</Button>
      </div>
      <div>
        <h1>위잇트에서 더 많은 이야기를 나눠보세요</h1>
        <p>식당 리뷰와 건강식 레시피를 공유하며 더 건강하게!</p>
      </div>
      <div>
        <img src="/path-to-logo.png" alt="리뷰이미지" />
      </div>
    </section>
  );
};

export default Hero;
