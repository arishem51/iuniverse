import React from "react";
import styled from "styled-components";

const ZigZac = styled.div`
  --color-stop: #eceddc 90deg;
  --size: 200px;
  width: var(--size);
  aspect-ratio: 1;
  background: conic-gradient(from -45deg, var(--color-stop), transparent 0),
    conic-gradient(from 135deg, var(--color-stop), #29ab87 0)
      calc(var(--size) / 4) 0;
  background-size: calc((var(--size) / 2)) calc((var(--size) / 2));
`;

export default function Component() {
  return <ZigZac />;
}
