import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px 16px 32px;
  z-index: 1000;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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
  align-items: center;
  gap: 24px;
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


const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="src/assets/images/logo_typo.svg" alt="위잇트 로고" />
      </Logo>
      <HeaderButtons>
        <HeaderLink href="/about">위잇트 소개</HeaderLink>
        <HeaderLink href="/community">커뮤니티</HeaderLink>
        <HeaderLink href="/challenge">챌린지</HeaderLink>
        <HeaderLink href="/download">다운로드</HeaderLink>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
