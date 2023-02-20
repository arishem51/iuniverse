import React from "react";
import styled from "styled-components";

const CheckBoardWrapper = styled.div`
  --size: 200px;
  --bg-size: calc(var(--size) / 5) calc(var(--size) / 5) /* 40px */;
  width: var(--size);
  aspect-ratio: 1;
  background: repeating-conic-gradient(
    var(--color-dark) 0 25%,
    var(--color-white) 0 50%
  );
  background-size: var(--bg-size);
`;

export default function ChessBoard() {
  return <CheckBoardWrapper />;
}
