import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

const Wrapper = styled.div`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  background-color: var(--color-lightGray);
`;

export default function SquareShape() {
  return <Wrapper />;
}
