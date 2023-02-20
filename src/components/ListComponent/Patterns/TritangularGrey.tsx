import React from "react";
import styled from "styled-components";

const Tritanular = styled.div`
  --size: 100px;
  width: 200px;
  aspect-ratio: 1;
  background: conic-gradient(
        from 75deg,
        #b9b9b9 0 15deg,
        #dcdcdc 0 30deg,
        transparent 0 180deg,
        #dcdcdc 0 195deg,
        #b9b9b9 0 210deg,
        transparent 0
      )
      57.5px 100px,
    conic-gradient(
      #b9b9b9 0 30deg,
      #fafafa 0 75deg,
      #b9b9b9 0 90deg,
      #dcdcdc 0 105deg,
      #fafafa 0 150deg,
      #dcdcdc 0 180deg,
      #fafafa 0 210deg,
      #b9b9b9 0 256deg,
      #dcdcdc 0 270deg,
      #b9b9b9 0 286deg,
      #dcdcdc 0 331deg,
      #fafafa 0
    );
  background-size: 200px 200px;
  background-repeat: no-repeat;
`;

export default function Component() {
  return <Tritanular />;
}
