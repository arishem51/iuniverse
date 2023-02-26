import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: 25px;
  --color-stop: var(--color-white) 98%, transparent 0;

  background: radial-gradient(var(--bg-size) at 35% 35%, var(--color-stop)),
    radial-gradient(var(--bg-size) at 35% 70%, var(--color-stop)),
    radial-gradient(var(--bg-size) at 70% 70%, var(--color-stop)),
    radial-gradient(var(--bg-size) at 70% 35%, var(--color-stop));
  background-size: 100px 100px;
`;

export default function Component() {
  return <Wrapper />;
}
