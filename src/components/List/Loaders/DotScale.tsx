import { renderArray } from "@helper";
import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  --size: 54px;

  position: relative;
  left: 1.2em;
  top: 1.4em;

  width: var(--size);
  height: var(--size);
`;

const Scale = keyframes`
  0%,100%{
    opacity: 1;
    transform: rotate(calc(var(--index) * 45deg)) translateY(var(--y)) scale(1);
  }50%{
    opacity: .5;
    transform: rotate(calc(var(--index) * 45deg)) translateY(var(--y)) scale(0);
  }
`;

const Dot = styled.div`
  --size: 0.7em;
  --y: -1.6em;

  position: absolute;

  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  background-color: var(--color-lightGrey);

  transform: rotate(calc(var(--index) * 45deg)) translateY(var(--y)) scale(1);

  animation: ${Scale} 1.2s linear infinite;
  animation-delay: calc(var(--index) * 0.08s);
`;

export default function DotScale() {
  const renderDot = (item: { id: string }, index: number) => (
    <Dot key={item.id} style={{ "--index": index } as CSSProperties} />
  );
  const renderItem = () => renderArray(8, renderDot);
  return <Container>{renderItem()}</Container>;
}
