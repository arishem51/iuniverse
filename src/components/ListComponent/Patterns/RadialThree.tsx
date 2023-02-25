import React from "react";
import styled from "styled-components";
import { PatternContainer } from "../../Base";

const Wrapper = styled(PatternContainer)`
  background: radial-gradient(50px at 25% 12.5%, red 50%, transparent 0),
    radial-gradient(50px at 25% 25%, yellow 50%, transparent 0);
  background-size: 100px 100px;
  background-repeat: no-repeat;
`;

export default function Component() {
  return <Wrapper />;
}
