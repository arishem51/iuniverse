import React from "react";
import styled from "styled-components";

const CheckBoardWrapper = styled.div`
  --size: 200px;
  --bg-size: calc(var(--size) / 5);
  width: var(--size);
  aspect-ratio: 1;
  background: conic-gradient(
      at center center,
      var(--color-dark) 90deg,
      var(--color-white) 0 180deg,
      var(--color-dark) 0 270deg,
      var(--color-white) 0 360deg
    )
    0 0 / var(--bg-size) var(--bg-size);
`;

export default function ChessBoard() {
  return <CheckBoardWrapper />;
}
