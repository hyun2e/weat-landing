import { px } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ChipLabel = styled.div`
display: inline-block;
font-size: 10px;
border-radius: 12px;
border: 1px solid ${({ theme }) => theme.colors.primary200};
color: ${({ theme })=> theme.colors.primary};
padding: 4px 4px;
`;

const Chip = ({ children }) => {
  return <ChipLabel>{children}</ChipLabel>;
};

export default Chip;
