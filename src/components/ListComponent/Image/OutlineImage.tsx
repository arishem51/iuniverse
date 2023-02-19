import React from "react";
import styled from "styled-components";

const Image = styled.img`
  --at: 1px;
  width: 200px;
  aspect-ratio: 1;
  padding: 30px;
  background: conic-gradient(
      from 90deg at var(--at) var(--at),
      transparent 25%,
      var(--color-white) 25%
    )
    20px 20px / calc(100% - 40px) calc(100% - 40px);
  outline: 1px solid white;
  outline-offset: -10px;
`;

export default function Component() {
  return <Image src="https://picsum.photos/id/16/200" />;
}
