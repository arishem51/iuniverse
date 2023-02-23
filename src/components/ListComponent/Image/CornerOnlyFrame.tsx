import React from "react";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Image = styled(ImageContainer)`
  --rotate-position: 0.2em;
  --color-stop: transparent 25%, var(--color-white) 0;
  --top: top var(--rotate-position);
  --bottom: bottom var(--rotate-position);
  --right: right var(--rotate-position);
  --left: left var(--rotate-position);

  padding: calc(var(--rotate-position) * 2);

  background: conic-gradient(
        from 90deg at var(--top) var(--left),
        var(--color-stop)
      )
      top left,
    conic-gradient(from 0deg at var(--bottom) var(--left), var(--color-stop))
      bottom left,
    conic-gradient(from 270deg at var(--bottom) var(--right), var(--color-stop))
      bottom right,
    conic-gradient(from 180deg at var(--top) var(--right), var(--color-stop))
      top right;
  background-size: 20% 20%;
  background-repeat: no-repeat;

  cursor: pointer;
  transition: background-size 0.6s;
  will-change: background-size;
  :hover {
    background-size: 51% 51%;
  }
`;

export default function Component() {
  return <Image src="https://picsum.photos/id/39/200" />;
}
