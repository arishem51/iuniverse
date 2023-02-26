import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  --color: #1095c1;
  padding: 0 0.1em;
  font-size: 4em;
  color: var(--color);
  background: linear-gradient(var(--color) 0 0) no-repeat;
  background-size: 0 100%;
  transition: background-size 0.3s, color 0.3s;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    background-position: right;
    background-size: 100% 100%;
    color: var(--color-white);
  }
`;

export default function Component() {
  return <Text>Hover Me</Text>;
}
