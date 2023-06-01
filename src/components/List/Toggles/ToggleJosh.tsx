import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 5em;
  height: 2.5em;
`;

const Input = styled.input`
  position: absolute;
  z-index: 3;
  inset: 0;

  opacity: 0;
  cursor: pointer;
`;

const Slide = styled.div`
  position: relative;
  z-index: 2;
  top: 50%;

  width: 100%;
  height: 0.5em;

  transform: translateY(-50%);
  background-color: var(--color-white);

  border-radius: 1em;
  border: 1px solid var(--color-dark);
`;

const Ball = styled.div`
  --border-size: 3px;
  --size: 2.5em;
  --transition-time: 0.3s;

  position: absolute;
  top: 0;
  z-index: 2;

  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  border: var(--border-size) solid var(--color-lightDark);
  outline: var(--border-size) solid var(--color-dark);
  outline-offset: calc(var(--border-size) * -1.8);

  background: var(--color-white);
  transition: transform var(--transition-time) 0.05s,
    background var(--transition-time);

  ${Input}:checked ~ & {
    transform: translateX(100%);
    background: hsl(140deg 100% 70%);
  }
`;

export default function Component() {
  return (
    <Wrapper>
      <Input type="checkbox" />
      <Slide />
      <Ball />
    </Wrapper>
  );
}
