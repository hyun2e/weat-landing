import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  padding: 50px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey600};
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;
const FooterContents = styled.div`
  width: 800px;
  max-width: none;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;
const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
`;
// 푸터 탭 스타일
const FooterTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
const FooterTab = styled.a`
  color: ${({ theme }) => theme.colors.grey100};
  font-size: ${({ theme }) => theme.fontSizes.fs16};
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs14};
  }
`;

// 푸터 내용 스타일
const FooterDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterDetail = styled.a`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: ${({ theme }) => theme.colors.grey250};
  font-size: ${({ theme }) => theme.fontSizes.fs14};
  line-height: 1.5;
  text-decoration: none; /* 밑줄 제거 */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs11};
  }
`;

const FooterIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const FooterIconButton = styled.a`
  align-items: center;
  justify-content: center;
  background-color: none;
`;
const FooterIconimg = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterTextWrapper>
          <FooterTabWrapper>
            <FooterTab onClick={() => window.alert("준비중입니다.")}>
              개인정보처리방침
            </FooterTab>
            <FooterTab>| </FooterTab>
            <FooterTab onClick={() => window.alert("준비중입니다.")}>
              서비스 이용약관
            </FooterTab>
          </FooterTabWrapper>

          <FooterDetailWrapper>
            <FooterDetail>주식회사 일인팁삼프제</FooterDetail>
            <FooterDetail>대표 : 강현철, 배고은, 정소임, 최지호</FooterDetail>
            <FooterDetail>
              주소 : 서울특별시 강남구 테헤란로44길 8, 12-13층
            </FooterDetail>
            <FooterDetail href="mailto:weat@tpfj.co.kr" target="blank">
              이메일 : help@weat.co.kr
            </FooterDetail>
            <FooterDetail>업자등록번호 : 576-97-02738</FooterDetail>
            <FooterDetail>
              ⓒ 2025. 일인팁삼프제 Co., Ltd. All rights reserved.
            </FooterDetail>
          </FooterDetailWrapper>
        </FooterTextWrapper>

        <FooterIconWrapper>
          <FooterIconButton href="https://www.youtube.com" target="_blank">
            <FooterIconimg
              src="/assets/images/icon_youtube.svg"
              alt="YouTube"
            />
          </FooterIconButton>
          <FooterIconButton href="https://www.instagram.com" target="_blank">
            <FooterIconimg
              src="/assets/images/icon_insta.svg"
              alt="Instagram"
            />
          </FooterIconButton>
          <FooterIconButton>
            <FooterIconimg
              src="/assets/images/icon_airplane.svg"
              alt="Message"
            />
          </FooterIconButton>
        </FooterIconWrapper>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
