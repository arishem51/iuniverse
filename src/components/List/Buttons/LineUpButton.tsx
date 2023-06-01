import styled from "styled-components";

const Wrapper = styled.div`
  --scaleTime: 0.3s;
  --translateTime: 0.5s;
  --size: 0.5em;

  position: relative;
  isolation: isolate;
  z-index: 2;

  padding: var(--size) calc(var(--size) * 2.5);
  background: transparent;

  color: white;
  font-weight: 700;
  font-size: calc(var(--size) * 2.5);

  overflow: hidden;
  transition: color 0.2s var(--scaleTime);

  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #ffc506;
    translate: 0 95%;
    transition: scale var(--scaleTime) var(--translateTime),
      translate var(--translateTime);
    scale: 0 1;
    transform-origin: left;
    z-index: -1;
  }
  :hover {
    ::after {
      scale: 1 1;
      translate: 0 0;
      transition: scale var(--scaleTime),
        translate var(--translateTime) var(--scaleTime);
    }
    color: var(--color-dark);
  }
`;

export function LineUpButton() {
  return <Wrapper>Hover Me</Wrapper>;
}
