import React from "react";
import styled from "styled-components";

const Info1Wrapper = styled.div`
  width: 100%;
  height: 560px;
  margin: auto;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary400};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const ContentGrad = styled.img`
  width: 100%;
  height: 560px;
  position: absolute;
  bottom: 0;
  z-index: 100;
`;

const HeaderWrapper = styled.div`
  margin: auto;
  display: grid;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Image = styled.img`
  margin: auto;
  display: grid;
  width: 21.5px;
  height: 21.5px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Texth2 = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.fs28};
  font-weight: 700;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`;

const ImageOP = styled.img`
  padding: 40px 0 0 0;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* 데스크탑 화면에서 기본 이미지 */
  src: url("ssrc/assets/images/section2_domino.svg");

  /* 모바일 화면에서 다른 이미지 */
  @media (max-width: 768px) {
    width: 100%; /* 크기 줄이기, 원하는 비율로 조정 */
    height: auto; /* 비율 유지 */;
    src: url("src/assets/images/mo_section2_domino.svg");
  }
`;

const Info1 = () => {
  return (
    <Info1Wrapper>
      <ContentGrad src="src/assets/images/pc_section2 bg.png" />
      <div>
        <HeaderWrapper>
          <Image src="src/assets/images/icon_question.svg" alt="image1" />
          <Texth2>
            다양한 건강식 메뉴를
            <br />
            외식으로 찾기 어려우신가요?
          </Texth2>
        </HeaderWrapper>

        <ImageOP
          src="src/assets/images/section2_domino.svg"
          alt="second-image"
        />
      </div>
    </Info1Wrapper>
  );
};

export default Info1;
