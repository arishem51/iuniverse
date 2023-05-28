import React from "react";
import styled from "styled-components";
import { FlexContainer } from "@components";

const Wrapper = styled(FlexContainer)`
  --color: #a29bfe;
  --size: 0.5em;
  border: none;
  position: relative;
  padding: var(--size) calc(var(--size) * 2);
  background-color: #6c5ce7;
  border-radius: calc(var(--size) / 2);
  color: var(--color-white);
  font-weight: 700;
  font-size: calc(var(--size) * 2);
  cursor: pointer;
  user-select: none;
  box-shadow: 0 5px 0 0 var(--color);
  transition: all 0.1s ease;
  :active {
    translate: 0 5px;
    box-shadow: 0 0 0 0 var(--color);
  }
`;

export function KeyboardButton() {
  return <Wrapper as="button">Click Me</Wrapper>;
}
