import React from "react";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Image = styled(ImageContainer)`
  --bg-size: 30px 30px;
  --bg-pos: -15px -15px;
  --size: 250px;

  width: var(--size);
  height: calc(var(--size) - 50px);
  padding: 1em;

  background: radial-gradient(
        10px,
        var(--color-lightDark) 98%,
        var(--color-white)
      )
      round var(--bg-pos) / var(--bg-size),
    linear-gradient(to right, var(--color-white) 0 0) no-repeat;

  filter: grayscale(0.4);
  cursor: unset;
`;

export default function Component() {
  return <Image srcId={345} src="https://picsum.photos/id/345/200" />;
}
