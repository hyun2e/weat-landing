import React from "react";
import styled from "styled-components";

// 인포2 카드 스타일
const Info2Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  gap: 6px;
  height: 72px;
  padding: 12px 20px 12px 12px;
  border-radius: 36px;
  width: auto;
  max-width:none;
  border: 1px solid ${({ theme }) => theme.colors.grey250};
`;

// 인포2 텍스트 - 본문
const Info2CardText = styled.p`
  white-space: pre-line;
  font-weight: 500;
  line-height: 1.5;
  max-width: none;
  overflow: visible;
`

const Card_Info2 = ({ icon, text }) => {
  return (
    <Info2Card>
      <img src={icon} />
      <Info2CardText>{text}</Info2CardText>
    </Info2Card>
  );
};

export default Card_Info2;
