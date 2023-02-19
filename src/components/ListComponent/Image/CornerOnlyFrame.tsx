import React from "react";
import styled from "styled-components";

const Image = styled.img`
  --bg-size: 0.5em;
  width: 200px;
  aspect-ratio: 1;
  padding: calc(var(--bg-size) * 2);
  background: conic-gradient(
        from 90deg at top var(--bg-size) left var(--bg-size),
        transparent 25%,
        white 0
      )
      top 0 left 0,
    conic-gradient(
        from 0deg at bottom var(--bg-size) left var(--bg-size),
        transparent 25%,
        white 0
      )
      bottom 0 left 0,
    conic-gradient(
        from 270deg at bottom var(--bg-size) right var(--bg-size),
        transparent 25%,
        white 0
      )
      bottom 0 right 0,
    conic-gradient(
        from 180deg at top var(--bg-size) right var(--bg-size),
        transparent 25%,
        white 0
      )
      top 0 right 0;
  background-size: 25% 25%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-size 0.5s ease-in-out;
  :hover {
    background-size: 51% 51%;
  }
`;

export default function Component() {
  return <Image src="https://picsum.photos/id/39/200" />;
}
