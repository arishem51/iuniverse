import React from "react";
import styled from "styled-components";
import { PatternContainer } from "@components";

const ZigZac = styled(PatternContainer)`
  --color-stop: #eceddc 90deg;
  --bg-size: calc(var(--size) / 2) calc(var(--size) / 2);

  background: conic-gradient(from -45deg, var(--color-stop), transparent 0),
    conic-gradient(from 135deg, var(--color-stop), #29ab87 0)
      calc(var(--size) / 4) 0;
  background-size: var(--bg-size);
`;

export default function Component() {
  return <ZigZac />;
}
