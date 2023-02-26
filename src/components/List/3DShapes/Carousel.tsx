import React from "react";
import styled, { keyframes } from "styled-components";
import { getTanFromDegrees } from "../../../helpers";
import { FlexContainer } from "../../Base";

const Wrapper = styled(FlexContainer)`
  --width: 140px;
  position: relative;
  width: var(--width);
  height: 100px;
  perspective: 600px;
`;

const rotate = keyframes`
    100%{
        transform: rotateY(360deg);
    }
`;

const CarouselWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${rotate} 10s linear infinite;
`;

const CarouselItem = styled.div`
  --size: calc(100% - 20px);
  --rotateY: calc(var(--index) * 72deg); // 72 = 360deg / 5 items
  --color-bg: hsla(var(--rotateY), 100%, 50%, 0.7);
  --transalteZ: calc(
    (var(--width) / 2) / ${getTanFromDegrees(36)}
  ); // 36 = 72deg / 2
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: var(--color-bg);
  border-radius: 10px;
  transform: rotateY(var(--rotateY)) translateZ(var(--transalteZ));
`;

function renderItem() {
  return new Array(5)
    .fill(".")
    .map((_, index) => (
      <CarouselItem
        key={index + _}
        style={{ "--index": index } as React.CSSProperties}
      />
    ));
}

export function Carousel() {
  return (
    <Wrapper center>
      <CarouselWrapper>{renderItem()}</CarouselWrapper>
    </Wrapper>
  );
}
