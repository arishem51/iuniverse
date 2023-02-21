import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-size: 4em;
  padding: 0 0.5em;
  color: var(--color-dark);
  background: linear-gradient(#1095c1 0 0) no-repeat;
  background-size: 0 100%;
  transition: background-size 0.3s, color 0.3s;
  cursor: pointer;
  :hover {
    background-position: right;
    background-size: 100% 100%;
    color: var(--color-white);
  }
`;

export default function Component() {
  return <Text>Hover Me</Text>;
}
