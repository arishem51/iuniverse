import React from "react";
import styled from "styled-components";
import { PatternContainer } from "@components";

const Wrapper = styled(PatternContainer)`
  --bg-size: calc(var(--size) / 4) calc(var(--size) / 4);
  --bg-corner: 40% 40%;
  --color-stop: white 95%, transparent;
  --bg-position: 0 0;

  background: radial-gradient(var(--bg-corner), var(--color-stop))
    var(--bg-position) / var(--bg-size);
`;

export default function Component() {
  return <Wrapper />;
}
