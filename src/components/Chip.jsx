import React from "react";
import styled from "styled-components";

const ChipLabel = styled.div``;

const Chip = ({ children }) => {
  return <ChipLabel>{children}</ChipLabel>;
};

export default Chip;
