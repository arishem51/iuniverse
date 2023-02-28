import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  --bg-size: calc(var(--size) / 2) calc(var(--size) / 2);
  background: repeating-radial-gradient(white 0 12%, #c39f76 13% 26%);

  background-size: var(--bg-size);
`;

export default function Component() {
  return <Wrapper />;
}
