import React from "react";
import styled from "styled-components";
import { ImageContainer } from "@components";

const Wrapper = styled(ImageContainer)`
  --size: 200px;
  --bg-animation: 0%;
  --reverse-bg-animation: calc(100% - var(--bg-animation));
  --color: #fcd703 0 0;
  --offset: 8px;

  padding: calc(var(--size) / 12.5);

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
  :hover {
    --bg-animation: 100%;
  }
`;

export function FrameReveal() {
  return <Wrapper srcId={42} src="https://picsum.photos/id/42/200" />;
}
