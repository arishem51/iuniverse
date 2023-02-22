import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  --color: #1095c1;
  position: relative;
  cursor: pointer;
`;

const Text = styled.h1`
  position: relative;
  z-index: 3;
  color: var(--color);
  font-size: 4em;
  transition: color 0.3s;
  ${Wrapper}:hover & {
    color: var(--color-white);
  }
`;

const LeftSide = styled.div`
  position: absolute;
  z-index: 4;
  inset: 0;
  width: 125%;
  height: 200%;
  background: conic-gradient(from 210deg, red 120deg, transparent 0 0);
`;

const RightSide = styled.div`
  position: absolute;
  z-index: 4;
  inset: 0;
  width: 125%;
  height: 200%;
  background: conic-gradient(from 30deg, green 120deg, transparent 0 0);
`;

export default function Component() {
  return (
    <Wrapper>
      <Text>Hover Me</Text>
      <LeftSide />
      <RightSide />
    </Wrapper>
  );
}
