import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  width: 200px;
  padding: 20px;
  aspect-ratio: 1;

  cursor: pointer;
  :hover {
  }
`;

export default function Component() {
  return <Wrapper src="https://picsum.photos/id/48/200" />;
}
