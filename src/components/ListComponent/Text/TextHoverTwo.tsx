import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  display: block;
  font-size: 4em;
  padding: 0 0.5em;
  color: var(--color-dark);
  background: linear-gradient(#1095c1 0 0) no-repeat;
  background-position: 0 1.4em;
  background-size: 100% 100%;
  cursor: pointer;
`;

export default function TextHoverTwo() {
  return <Text>Hover Me</Text>;
}
