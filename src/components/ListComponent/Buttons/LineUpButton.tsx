import styled from "styled-components";

const Text = styled.h3`
  position: relative;
`;

const Wrapper = styled.div`
  --scaleTime: 0.3s;
  --translateTime: 0.5s;
  position: relative;
  padding: 12px 24px;
  cursor: pointer;
  background: transparent;
  overflow: hidden;

  color: white;
  z-index: 2;
  transition: color 0.2s var(--scaleTime);
  font-weight: 700;
  isolation: isolate;
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

export default function LineUpButton() {
  return <Wrapper>Hover Me</Wrapper>;
}
