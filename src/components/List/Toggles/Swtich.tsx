import React from "react";
import styled, { keyframes } from "styled-components";

// Made by @namecho --> https://uiverse.io/namecho/quiet-panther-93

const Input = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

const scale = keyframes`
    0%{
        transform: scaleX(1);
    }100%{
        transform: scaleX(1.2);
    }
`;

const Checkbox = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-white);
  transition: translate 0.3s;
  z-index: 1;
  ${Input}:checked + & {
    translate: 40px 0;
  }
  ${Input}:active + & {
    animation: ${scale} 0.05s linear;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  width: 80px;
  border-radius: 30px;
  background: #cccccc;
  padding: 5px;
  transition: background 0.3s;
  :has(${Input}:checked) {
    background: #4296f4;
  }
`;

export default function Switch() {
  return (
    <Wrapper>
      <Input type="checkbox" />
      <Checkbox />
    </Wrapper>
  );
}
