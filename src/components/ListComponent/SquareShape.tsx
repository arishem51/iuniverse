import styled from "styled-components";

const Wrapper = styled.div`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  background-color: black;
`;

export default function SquareShape() {
  return <Wrapper />;
}
