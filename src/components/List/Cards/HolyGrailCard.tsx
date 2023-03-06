import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../Base";

// Inspiration from Hyperplexed --> https://codepen.io/Hyperplexed/pen/QWQRGdO

const Wrapper = styled.div`
  --color-border: rgb(3, 169, 244);
  --g1: rgb(98, 0, 234);
  --g2: rgb(236, 64, 122);
  --g3: rgb(253, 216, 53);

  position: relative;

  width: 200px;
  height: 300px;

  border: 2px solid var(--color-border);
  background: var(--color-dark);

  ::before {
    content: "";
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;

    background: linear-gradient(
      130deg,
      transparent 0% 33%,
      var(--g1) 66%,
      var(--g2) 83.5%,
      var(--g3) 100%
    );
    background-position: 0% 0%;
    background-size: 300% 300%;

    pointer-events: none;
    transition: background-position 350ms ease, transform 350ms;
  }
  :hover {
    &::before {
      background-position: 100% 100%;
      transform: scale(1.08, 1.03);
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 100%;
  padding: 1em;
  padding-top: 1.2em;

  background: radial-gradient(
      1.2em,
      rgba(255, 255, 255, 0.25) 9%,
      transparent 10% 0
    )
    0em 0.35em / 1.5em 1.5em;

  cursor: pointer;
  transition: background-position 350ms ease;

  ${Wrapper}:hover & {
    background-position: -2em 0.35em;
  }
`;

const CardTitle = styled.h1`
  font-size: 1.8em;
  color: var(--color-white);
  font-weight: 500;
`;

const CardText = styled.span<{ index: number }>`
  --transition-delay: calc(${(props) => props.index * 60} * 1ms);
  --opacity-time: 0ms;

  font-size: 0.9em;
  color: var(--color-white);
  line-height: 1.3em;

  transform: translateY(40%);
  opacity: 0;
  transition: transform 350ms var(--transition-delay)
      cubic-bezier(0, 0.5, 0, 0.99),
    opacity var(--opacity-time);

  ${Wrapper}:hover & {
    transform: translateY(0);
    opacity: 1;
    --opacity-time: 100ms;
  }
`;

const TextWrapper = styled(FlexContainer)`
  flex-wrap: wrap;
`;

const Text = "This gradient card is awesome!";

export default function Component() {
  return (
    <Wrapper>
      <CardContent>
        <CardTitle>Hello World</CardTitle>
        <TextWrapper>
          {Text.split(" ").map((item, index) => (
            <CardText index={index} key={item}>
              {item}&nbsp;
            </CardText>
          ))}
        </TextWrapper>
      </CardContent>
    </Wrapper>
  );
}
