import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  --offset: 8px;
  --bg-animation: -200px;
  --bg-size: var(--offset);

  width: 200px;
  padding: calc(var(--offset) * 2);
  aspect-ratio: 1;

  background:
   /* conic-gradient(
        from -90deg at top var(--offset) right var(--offset),
        var(--color-white) 270deg,
        transparent 0 0
      )
      var(--bg-animation) 0 / 100% var(--bg-size), */ conic-gradient(
      at bottom var(--offset) left var(--offset),
      var(--color-white) 270deg,
      transparent 0 0
    )
    bottom left / 100% 100%;
  background-repeat: no-repeat;

  transition: background-position 0.3s 0.3s, background-size 0.3s;
  cursor: pointer;
  :hover {
    --bg-animation: 0px;
    --bg-size: 100%;
    transition: background-position 0.3s, background-size 0.3s 0.3s;
  }
`;

export default function Component() {
  return <Wrapper src="https://picsum.photos/id/48/200" />;
}
