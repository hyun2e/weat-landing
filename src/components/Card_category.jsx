import React from "react";
import styled from "styled-components";

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Card_category = ({ icon, text }) => {
  return (
    <CategoryCard>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </CategoryCard>
  );
};

export default Card_category;
