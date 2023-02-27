import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  inset: 0;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
`;

const Slide = styled.div`
  width: 5em;
  height: 5px;
  background-color: white;
  border-radius: 1em;
`;

const Ball = styled.div``;

export default function Component() {
  return (
    <Wrapper>
      <Input type="checkbox" />
      <Slide />
    </Wrapper>
  );
}
