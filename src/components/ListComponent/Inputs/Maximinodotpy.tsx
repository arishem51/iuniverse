import styled from "styled-components";

// Made by -@Maximinodotpy --> https://uiverse.io/Maximinodotpy/thin-sheep-13

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
`;

const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  padding: 0 4px;
  translate: 8px -50%;
  color: var(--color-lightGray);
  transition: translate 0.3s, scale 0.3s;
  background: var(--color-lightDark);
  pointer-events: none;
`;

const Input = styled.input`
  --color-bg: rgb(200, 200, 200);
  position: relative;
  z-index: 2;
  inset: 0;
  padding: 12px;
  border-radius: 30px;
  background: transparent;
  border: 2px solid var(--color-bg);
  caret-color: var(--color-bg);
  color: var(--color-lightGray);
  outline: none;
  transition: border-color 0.3s;
  :focus,
  :valid {
    border-color: rgb(150, 150, 200);
  }
  :is(:focus, :valid) + ${Label} {
    translate: 40% -150%;
    z-index: 2;
    scale: 0.9;
  }
`;

export default function Component() {
  return (
    <Wrapper>
      <Input type="text" required />
      <Label>Name</Label>
    </Wrapper>
  );
}
