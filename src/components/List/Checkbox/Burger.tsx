import styled from "styled-components";

// Made by @Cevorob --> https://uiverse.io/Cevorob/good-wolverine-51

const Wrapper = styled.label`
  position: relative;
  display: block;
  isolation: isolate;
  width: 50px;
  height: 40px;
  background: transparent;
  span:first-of-type {
    top: 0;
  }
  span:nth-of-type(2) {
    top: 50%;
    translate: 0 -50%;
    transform-origin: left;
  }
  span:last-of-type {
    bottom: 0;
  }
`;

const Input = styled.input`
  position: absolute;
  z-index: 2;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  :checked ~ span:first-of-type {
    rotate: 45deg;
    translate: 0 18px;
  }
  :checked ~ span:nth-of-type(2) {
    scale: 0 1;
    opacity: 0;
  }
  :checked ~ span:last-of-type {
    rotate: -45deg;
    translate: 0 -18px;
  }
`;

const Span = styled.span`
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 4px;
  background: var(--color-white);
  border-radius: 10px;
  transition: scale 0.2s, opacity 0.5s, rotate 0.5s, translate 0.3s;
`;

export function Burger() {
  return (
    <Wrapper htmlFor="burger">
      <Input type="checkbox" id="burger" />
      <Span />
      <Span />
      <Span />
    </Wrapper>
  );
}
