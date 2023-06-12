import styled from "styled-components";

const Container = styled.button`
  all: unset;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 36px;
  background: var(--color-white);

  border-radius: 16px;

  text-transform: uppercase;
  letter-spacing: 2px;

  cursor: pointer;

  outline: 2px solid white;

  transition: outline-offset 0.3s linear;
  will-change: outline-offset;
  &:hover {
    outline-offset: 3px;
  }
`;

export default function Button() {
  return <Container>button</Container>;
}
