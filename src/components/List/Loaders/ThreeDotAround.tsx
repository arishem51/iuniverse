import React from "react";
import styled, { keyframes } from "styled-components";

// Made by @G4b4131 --> https://uiverse.io/G4b413l/tidy-walrus-92

const rotate = keyframes`
    from {
        rotate: 0deg;
    } to {
        rotate: 360deg;
    }
`;

const Wrapper = styled.div`
  position: relative;
  animation: ${rotate} 2000ms linear infinite;
`;

const firsAnim = keyframes`
    from{
        scale: 1;
        translate: 0 0 ;
        opacity: 1;
    } to {
        scale: 0.8;
        translate: 66% -66%;
        opacity: .7;
    }
`;

const seconAnim = keyframes`
     from{
        scale: 1;
        translate: 0 0 ;
        opacity: 1;
    } to {
        scale: 0.8;
        translate: 0 66%;
        opacity: .7;
    }
`;

const thirdAnim = keyframes`
     from{
        scale: 1;
        translate: 0 0 ;
        opacity: 1;
    } to {
        scale: 0.8;
        translate: -66% -33%;
        opacity: .7;
    }
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-lightGray);

  :first-child {
    left: -15px;
    animation: ${firsAnim} 350ms infinite alternate ease-in-out;
  }
  :nth-child(2) {
    left: 0;
    top: -18px;
    animation: ${seconAnim} 350ms infinite alternate 200ms ease-in-out;
  }
  :last-child {
    left: 10px;
    animation: ${thirdAnim} 350ms infinite alternate 250ms ease-in-out;
  }
`;

export function ThreeDotAround() {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
}
