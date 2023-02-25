import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: 100px 100px;
  --color-stop: var(--color-white) 100%, green 0;
  --bg-radial: closest-side;
  background: radial-gradient(var(--bg-radial) at 25% 25%, var(--color-stop)),
    radial-gradient(var(--bg-radial) at 75% 75%, var(--color-stop));
  background-size: var(--bg-size);
  background-repeat: no-repeat;
`;

export default function Component() {
  return <Wrapper />;
}
