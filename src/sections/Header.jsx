import React from "react";
import styled from "styled-components";
import { useState } from "react";
const HeaderContainer = styled.nav`
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px 16px 32px;
  z-index: 1000;
  position: sticky;
  top: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 70px;
    padding: 19px 20px;
  }
`;
const Logo = styled.a`
  display: inline-block;
  width: 140px;
  height: 52px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  img {
    width: 32px;
    height: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    visibility: hidden;
  }
`;

const HeaderLink = styled.a`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.grey900};
  }
  &:focus {
    font-weight: 600;
  }
`;

const PrototypeLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.grey900};
  }
  &:focus {
    font-weight: 600;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isopen",
})`
  position: absolute;
  top: 80px;
  right: 32px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isopen }) => (isopen === "open" ? "block" : "none")};
  z-index: 999;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 70px;
    right: 20px;
  }
  a {
    display: block;
    padding: 12px 20px;
    color: ${({ theme }) => theme.colors.grey600};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary100};
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState("close");
  const toggleMenu = () =>
    setMenuOpen((prev) => (prev === "close" ? "open" : "close"));

  // 예시: 스크롤하여 섹션을 중앙에 배치하는 함수
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/assets/images/logo_typo.svg" alt="위잇트 로고" />
      </Logo>
      <HeaderButtons>
        <HeaderLink onClick={() => scrollToSection("info")}>
          위잇트 소개
        </HeaderLink>
        <HeaderLink onClick={() => scrollToSection("community")}>
          커뮤니티
        </HeaderLink>
        <HeaderLink onClick={() => scrollToSection("challenge")}>
          챌린지
        </HeaderLink>
        <PrototypeLink
          href="https://www.figma.com/proto/KGhnsoGF1w1mUW4nu5tfq6/3%EC%A1%B0-%EC%9D%BC%EC%9D%B8%ED[…]2%BC%ED%94%84%EC%A0%9C?node-id=1300-32073&t=YjVPeU7bdef9oon9-1"
          target="_blank"
        >
          체험하기
        </PrototypeLink>
      </HeaderButtons>
      <HamburgerButton onClick={toggleMenu}>
        <img src="/assets/images/burger-menu.svg" alt="메뉴" />
      </HamburgerButton>
      <MobileMenu isopen={menuOpen}>
        <a onClick={() => scrollToSection("info")}>위잇트 소개</a>
        <a onClick={() => scrollToSection("community")}>커뮤니티</a>
        <a onClick={() => scrollToSection("challenge")}>챌린지</a>
        <a href="" target="_blank">
          체험하기
        </a>
      </MobileMenu>
    </HeaderContainer>
  );
};
export default Header;
