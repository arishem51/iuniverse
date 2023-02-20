import React from "react";
import styled from "styled-components";

const Tritangular = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background: conic-gradient(
        from 150deg at 50% 33%,
        #fa6900 60deg,
        transparent 0
      )
      50px -12.5px,
    conic-gradient(from -30deg at 50% 66%, #d95b43 60deg, #ecd078 0) 0 12.5px;
  background-size: 100px 100px;
`;

export default function Component() {
  return <Tritangular />;
}
