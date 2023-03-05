import React from "react";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Image = styled(ImageContainer)`
  --rotate-position: 0.3em;
  --position: 0;
  --color-stop: transparent 25%, #fcd703 0;
  --bg-transition-time: 0.2s;

  padding: calc(var(--rotate-position) * 3.5);

  background: conic-gradient(
        from 90deg at top var(--rotate-position) left var(--rotate-position),
        var(--color-stop)
      )
      top var(--position) left var(--position),
    conic-gradient(
        from 270deg at bottom var(--rotate-position) right
          var(--rotate-position),
        var(--color-stop)
      )
      bottom var(--position) right var(--position);

  background-size: 20% 20%;
  background-repeat: no-repeat;

  transition: background-position var(--bg-transition-time),
    // Background size delay for a "--bg-transition-time" time
    background-size calc(var(--bg-transition-time) * 2)
      var(--bg-transition-time);

  :hover {
    --position: 0.5em;
    --bg-size: calc(100% - var(--position) * 2);
    background-size: var(--bg-size) var(--bg-size);
  }
`;

export function CornerOnlyFrameTwo() {
  return <Image srcId={133} src="https://picsum.photos/id/133/200/200" />;
}
