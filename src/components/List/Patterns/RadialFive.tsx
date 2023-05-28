import React from "react";
import styled from "styled-components";
import { PatternContainer } from "@components";

const Wrapper = styled(PatternContainer)`
  --bg-corner: 50% 50%;
  --color-stop-1: var(--color-white) 70%;
  --color-stop-2: #c39f76 0 80%, transparent 0;

  background: radial-gradient(
      var(--bg-corner) at left,
      var(--color-stop-1),
      var(--color-stop-2)
    ),
    radial-gradient(var(--bg-corner) at right, var(--color-stop-2));

  background-size: 100px 100px;
`;

export default function Component() {
  return <Wrapper />;
}
