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

// 카테고리 카드 텍스트 스타일
const CategoryCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs14};
  font-weight: 500;
  line-height: 1.5;
`;

const Card_category = ({ icon, text }) => {
  return (
    <CategoryCard>
      <img src={icon} alt={text} />
      <CategoryCardText>{text}</CategoryCardText>
    </CategoryCard>
  );
};

export default Card_category;
