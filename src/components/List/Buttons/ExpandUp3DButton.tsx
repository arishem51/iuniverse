import React from "react";
import styled from "styled-components";
import { ButtonContainer, FlexContainer } from "@components";

const Overlay = styled(FlexContainer)`
  position: absolute;
  top: -5px;
  left: 10px;
  width: 100px;
  height: 32px;
  padding: 10px;
  color: var(--color-white);
  background: transparent;
  font-weight: 700;
  transition: all 0.5s;
`;

const Wrapper = styled(ButtonContainer)`
  position: relative;
  width: 100px;
  height: 32px;
  rotate: -25deg;
  transform: skewX(25deg);
  background: transparent;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 10px;
    background-color: var(--color-dark);
    transform: skew(0, -40deg);
  }
  ::before {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 9px;
    width: 96px;
    background-color: var(--color-dark);
    left: 5px;
    transform: skew(-50deg, 0deg);
  }
  :hover {
    ${Overlay} {
      background: #52e19f;
      translate: calc((var(--index) - 1) * 10px)
        calc((var(--index) - 1) * -10px) calc((var(--index) - 1) * 10px);
      opacity: calc(var(--index) * 2 / 10);
    }
  }
`;

export function ExpandUp3DButton() {
  return (
    <Wrapper>
      <Overlay
        style={
          {
            "--index": 1,
          } as React.CSSProperties
        }
        center
      />
      <Overlay center style={{ "--index": 2 } as React.CSSProperties} />
      <Overlay center style={{ "--index": 3 } as React.CSSProperties} />
      <Overlay center style={{ "--index": 4 } as React.CSSProperties} />
      <Overlay center style={{ "--index": 5 } as React.CSSProperties}>
        Hover Me
      </Overlay>
    </Wrapper>
  );
}
