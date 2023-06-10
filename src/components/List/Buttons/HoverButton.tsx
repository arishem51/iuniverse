import styled from "styled-components";

const Wrapper = styled.button`
  all: unset;
  position: relative;

  width: 140px;
  height: 40px;

  background: var(--color-black);

  border-radius: 0.3rem;

  cursor: pointer;
`;

const TextWrapper = styled.span`
  --color-hover: #ff90e8;
  --offset: -0.5em;
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color-black);
  border-radius: 0.3rem;

  background: transparent;

  color: var(--color-white);
  font-size: 14px;

  transition: all 0.4s;

  ${Wrapper}:hover & {
    transform: translate(var(--offset), var(--offset));
    background: var(--color-hover);
    color: var(--color-black);
  }
`;

export default function HoverButton() {
  return (
    <Wrapper>
      <TextWrapper>Hover Me</TextWrapper>
    </Wrapper>
  );
}
