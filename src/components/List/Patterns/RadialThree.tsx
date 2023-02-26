import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --color-stop: var(--color-white) 99%, transparent 0;
  --bg-size: 50px;

  background: radial-gradient(
      calc(var(--bg-size) / 2) at top,
      var(--color-stop)
    ),
    radial-gradient(calc(var(--bg-size) / 2) at bottom, var(--color-stop)) 50% 0;
  background-size: var(--bg-size) var(--bg-size);
`;

export default function Component() {
  return <Wrapper />;
}
