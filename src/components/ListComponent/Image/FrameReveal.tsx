import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  --size: 200px;
  --bg-animation: 0%;
  --reverse-bg-animation: calc(100% - var(--bg-animation));
  --color: #fcd703 0 0;
  --offset: 8px;

  width: var(--size);
  padding: calc(var(--size) / 10);
  aspect-ratio: 1;

  background: 
    /* Top Linear Gradient */ linear-gradient(var(--color))
      var(--bg-animation) 0 / var(--bg-animation) var(--offset),
    /* Bototm Linear Gradient */ linear-gradient(var(--color))
      var(--reverse-bg-animation) 100% / var(--bg-animation) var(--offset),
    /* Left Linear Gradient */ linear-gradient(var(--color)) 0
      var(--reverse-bg-animation) / var(--offset) var(--bg-animation),
    /* Right Linear Gradient */ linear-gradient(var(--color)) 100%
      var(--bg-animation) / var(--offset) var(--bg-animation);
  background-repeat: no-repeat;

  transition: background-size 0.4s, background-position 0s;
  cursor: pointer;
  :hover {
    --bg-animation: 100%;
  }
`;

export default function Component() {
  return <Wrapper src="https://picsum.photos/id/42/200" />;
}
