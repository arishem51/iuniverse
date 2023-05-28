import React from "react";
import styled, { keyframes } from "styled-components";
import { getTanFromDegrees } from "../../../helper";
import { FlexContainer } from "../../Base";

const NUM = Array.from(Array(9).keys());

const Wrapper = styled(FlexContainer)`
  --z: 1.5em;
  perspective: 500px;
`;

const TextAnim = styled.span<{ index: number }>`
  --angle: ${getTanFromDegrees(40)};

  position: absolute;
  top: 0;
  left: 0;
  transform: rotateX(${(props) => props.index * 40}deg) translateZ(var(--z));
  backface-visibility: hidden;

  font-size: 2em;
  color: white;
  line-height: 1;
`;

const Rotate = keyframes`
    from {
        transform: translateZ(var(--z)) rotateX(0);
    }to {
        transform: translateZ(var(--z)) rotateX(360deg);
    }
`;

const TransformWrapper = styled.div`
  position: relative;
  transform-style: preserve-3d;
  width: 1.5ch;
  height: 1.5em;
  animation: ${Rotate} 10s linear infinite;
`;

export default function Component() {
  return (
    <Wrapper center>
      <TransformWrapper>
        {NUM.map((item) => (
          <TextAnim key={item + "a"} index={item + 1}>
            {item + 1}
          </TextAnim>
        ))}
      </TransformWrapper>
    </Wrapper>
  );
}
