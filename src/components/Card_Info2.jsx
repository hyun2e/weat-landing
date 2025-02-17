import React from "react";
import styled from "styled-components";

const Info2Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const Card_Info2 = ({ icon, text }) => {
  return (
    <Info2Card>
      <img src={icon} />
      <p>{text}</p>
    </Info2Card>
  );
};

export default Card_Info2;
