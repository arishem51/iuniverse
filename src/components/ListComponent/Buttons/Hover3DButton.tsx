import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "../../Base";

const Wrapper = styled(ButtonContainer)`
  padding: 4px 8px;
  background: #004dff;
  transform: perspective(700px) rotateY(-30deg);
  transition: all 0.5s;

  font-size: 32px;
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  :hover {
    transform: perspective(700px) rotateY(30deg);
  }
`;

export default function Button() {
  return <Wrapper>Button</Wrapper>;
}
