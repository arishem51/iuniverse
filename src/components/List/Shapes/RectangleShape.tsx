import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

const Wrapper = styled.div`
  height: 100px;
  width: 200px;
  background-color: var(--color-lgihtGrey);
`;

export default function RectangleShape() {
  return <Wrapper />;
}
