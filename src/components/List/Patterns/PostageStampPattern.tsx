import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: 50px;
  --bg-position: calc(var(--bg-size) / 2 * -1);
  --radius: 20px;

  width: calc(var(--size) + var(--bg-size));
  height: var(--size);

  background: radial-gradient(
        var(--radius),
        var(--color-lightDark) 98%,
        transparent 0
      )
      round var(--bg-position) var(--bg-position) / var(--bg-size)
      var(--bg-size),
    linear-gradient(to right, var(--color-white) 0 0);
`;

export default function Component() {
  return <Wrapper />;
}
