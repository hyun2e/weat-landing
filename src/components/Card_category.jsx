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
`;

// 카테고리 카트 이미지 스타일
const CategoryCardImage = styled.img`
 @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

// 카테고리 카드 텍스트 스타일
const CategoryCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs14};
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.fs12};
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
