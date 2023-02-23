import React from "react";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Wrapper = styled(ImageContainer)`
  --size: 200px;
  --offset: 8px;
  --bg-animation: calc(var(--size) * -1);
  --bg-size: var(--offset);
  --color-stop: #fcd703 270deg, transparent 0 0;
  --animation-duration: 0.3s;

  padding: calc(var(--offset) * 2);

  background: conic-gradient(
        from -90deg at top var(--offset) right var(--offset),
        var(--color-stop)
      )
      var(--bg-animation) 0 / 100% var(--bg-size),
    conic-gradient(
        from 90deg at bottom var(--offset) left var(--offset),
        var(--color-stop)
      )
      0 var(--bg-animation) / var(--bg-size) 100%;
  background-repeat: no-repeat;

  transition: background-position var(--animation-duration)
      var(--animation-duration),
    background-size var(--animation-duration);
  cursor: pointer;
  :hover {
    --bg-animation: 0px;
    --bg-size: 100%;
    transition: background-position var(--animation-duration),
      background-size var(--animation-duration) var(--animation-duration);
  }
`;

export default function Component() {
  return <Wrapper src="https://picsum.photos/id/48/200" />;
}
