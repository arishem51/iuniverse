import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: 25px;
  background: radial-gradient(
      var(--bg-size) at 35% 35%,
      white 98%,
      transparent 0
    ),
    radial-gradient(var(--bg-size) at 35% 70%, white 98%, transparent 0),
    radial-gradient(var(--bg-size) at 70% 70%, white 98%, transparent 0),
    radial-gradient(var(--bg-size) at 70% 35%, white 98%, transparent 0);
  background-size: 100px 100px;
`;

export default function Component() {
  return <Wrapper />;
}
