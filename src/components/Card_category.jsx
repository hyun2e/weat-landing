import React from "react";
import styled from "styled-components";

// 카테고리 카드 스타일
const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80px;
  height:107px;
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 82px;
  };
`;

// 카테고리 카트 이미지 스타일
const CategoryCardImage = styled.img`
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`

// 카테고리 카드 텍스트 스타일
const CategoryCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs14};
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs11};
  }
`;

const Card_category = ({ icon, text }) => {
  return (
    <CategoryCard>
      <CategoryCardImage src={icon} alt={text} />
      <CategoryCardText>{text}</CategoryCardText>
    </CategoryCard>
  );
};

export default Card_category;
