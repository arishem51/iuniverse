import React from "react";
import styled, { keyframes } from "styled-components";

// Made by @bhaveshxrawat --> https://uiverse.io/bhaveshxrawat/dangerous-quail-58

const rotate = keyframes`
    0%{
        transform: translate(50%) rotate(1deg);
    }100%{
        transform: translate(50%) rotate(360deg);
    }
`;

const Wrapper = styled.div`
  --color-bg: #07182e;
  --pd: 0.5em;
  --inner-bd: 2em;
  --inset: 0.25em;
  --outer-bd: calc(var(--inner-bd) + var(--inset));
  --gradient: linear-gradient(
    180deg,
    rgba(255, 0, 254, 1) 0%,
    rgba(0, 255, 244, 1) 100%
  );
  position: relative;
  height: 300px;
  width: 200px;
  background: var(--color-bg);
  border-radius: var(--outer-bd);
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -15%;
    bottom: -15%;
    left: 0;
    right: 40%;
    background: var(--gradient);
    animation: ${rotate} 3s linear infinite;
  }
  ::before {
    content: "";
    position: absolute;
    z-index: 2;
    inset: var(--inset);
    background: var(--color-bg);
    border-radius: var(--inner-bd);
  }
`;

const Text = styled.h1`
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  color: var(--color-white);
`;

export default function Component() {
  return (
    <Wrapper>
      <Text>Card</Text>
    </Wrapper>
  );
}
