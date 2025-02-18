import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderContainer = styled.header`
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px 16px 32px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: auto;
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
`
const HeaderButtons = styled.div`
  display: flex;
  gap: 24px;

  img {
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    visibility: hidden;
  }
`

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
`

const HamburgerButton = styled.div`
  align-items: center;
  justify-content: center;
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`
const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 32px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 70px;
    right: 20px;
  }
`;

const MobileMenuLink = styled.a`
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
      font-weight: 600;
    }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <HeaderContainer>
      <Logo>
        <img src="src/assets/images/logo_typo.svg" alt="위잇트 로고" />
      </Logo>
      <HeaderButtons>
        <HeaderLink href="#section-about">위잇트 소개</HeaderLink>
        <HeaderLink href="#section-community">커뮤니티</HeaderLink>
        <HeaderLink href="#section-challenge">챌린지</HeaderLink>
        <HeaderLink href="#section-download">다운로드</HeaderLink>
      </HeaderButtons>
      <HamburgerButton onClick={toggleMenu}>
        <img src="src/assets/images/burger-menu.svg" alt="메뉴" />
      </HamburgerButton>
        <MobileMenu isOpen={menuOpen}>
          <MobileMenuLink href="#section-about">위잇트 소개</MobileMenuLink>
          <MobileMenuLink href="#section-community">커뮤니티</MobileMenuLink>
          <MobileMenuLink href="#section-challenge">챌린지</MobileMenuLink>
          <MobileMenuLink href="#section-download">다운로드</MobileMenuLink>
        </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
