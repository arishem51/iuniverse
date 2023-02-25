import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: 100px 100px;
  --color-stop: var(--color-white) 50%, transparent 0;
  --bg-corner: 50% 50%;
  background: radial-gradient(var(--bg-corner) at 25% 25%, var(--color-stop)),
    radial-gradient(var(--bg-corner) at 75% 75%, var(--color-stop));
  background-size: var(--bg-size);
`;

export default function Component() {
  return <Wrapper />;
}
