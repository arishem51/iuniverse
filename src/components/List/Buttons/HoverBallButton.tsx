import { renderArray } from "@helper";
import { CSSProperties } from "react";
import styled from "styled-components";

const Container = styled.button`
  --duration: 0.3s;

  position: relative;

  width: 180px;
  height: 60px;

  background: transparent;
  border: 4px solid var(--color-white);

  cursor: pointer;

  overflow: hidden;
`;

const Ball = styled.div`
  --x: 0%;
  --y: 64%;
  --cubic: ease-out;

  position: absolute;
  left: calc(var(--index) * 33% - 8%);
  z-index: 1;

  width: 44%;
  aspect-ratio: 1;
  border-radius: 50%;

  background: var(--color-white);

  translate: var(--x) var(--y);
  scale: 1.07;

  transition-property: translate;
  transition-duration: var(--duration);
  transition-timing-function: var(--cubic);
  transition-delay: var(--delay);

  transition: translate var(--duration) var(--cubic) var(--delay);

  scale: 1.2;
  ${Container}:hover & {
    --cubic: cubic-bezier(0.25, 0.2, 1, 0.8);
    --y: -30%;
  }
`;

const Text = styled.span`
  --color: var(--color-white);

  position: relative;
  z-index: 2;

  color: var(--color);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 18px;

  transition: color var(--duration) 0.1s;

  ${Container}:hover & {
    --color: var(--color-dark);
  }
`;

export default function HoverBallButton() {
  const isOdd = (num: number) => num % 2 !== 0;

  const createDelayTime = (index: number) => {
    const isElementOdd = isOdd(index);
    if (isElementOdd) {
      return "0.06s";
    }
    return "0s";
  };

  const createStyles = (index: number) => {
    return {
      "--index": index,
      "--delay": createDelayTime(index),
    } as CSSProperties;
  };

  return (
    <Container>
      {renderArray(3, (item, index) => (
        <Ball key={item.id} style={createStyles(index)} />
      ))}
      <Text>Button</Text>
    </Container>
  );
}
