import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  --color-handle: hsl(140deg 100% 70%);
  width: 200px;
`;

const Input = styled.input`
  -webkit-appearance: none;

  width: 100%;
  height: 0.3em;

  border-radius: 0.5em;

  cursor: pointer;
  transition: opacity 0.1s;
  :active {
    opacity: 0.8;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    --size: 1.75em;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 0.25em solid var(--color-lightDark);
    background: var(--color-handle);
    cursor: grab;
  }
`;

export default function Component() {
  return (
    <Wrapper>
      <Input type="range" />
    </Wrapper>
  );
}
