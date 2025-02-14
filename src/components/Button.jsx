// src/components/Button.js
import React from "react";
import styled from "styled-components";
// FullButton 스타일 정의
export const HeroButton1 = styled.a`
  display: inline-block;
  padding: 14px 36px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 600;
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary600};
  }
`;
export const HeroButton2 = styled.a`
  display: inline-block;
  padding: 14px 36px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
  }
`;
export const HeroButton3 = styled.a`
  display: inline-block;
  padding: 14px 36px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary700};
  }
`;
// OutlineButton 스타일 정의
export const OutlineButton = styled.a`
  display: inline-block;
  padding: 10px 36px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 22px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
// Button 컴포넌트
// full-btn
const Button = ({ type, href, children }) => {
  switch (type) {
    case "hero-btn1":
    default:
      return (
        <HeroButton1 href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </HeroButton1>
      );
      case "hero-btn2":
      return (
        <HeroButton2 href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </HeroButton2>
      );
      case "hero-btn3":
        return (
          <HeroButton3 href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </HeroButton3>
        );
        case "outline-btn":
          return (
            <OutlineButton href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </OutlineButton>
          );
  }
};
export default Button;