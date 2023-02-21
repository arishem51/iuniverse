import React from "react";
import styled, { keyframes } from "styled-components";

const random = () => Math.random() * 100;

const generateClipPath = () => {
  let string = "";
  for (let i = 0; i <= 100; i += 4) {
    string += `
        ${i}%{
            clip-path: inset(${random()}% 0 ${random()}% 0);
        }
        `;
  }
  return string;
};

const anim = keyframes`
    ${generateClipPath()}
`;

const Wrapper = styled.div`
  position: relative;
  font-size: 80px;
  line-height: 80px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  span {
    font-size: 80px;
    line-height: 80px;
  }
  span:first-child {
    position: relative;
    inset: 0;
    z-index: 1;
  }
  span:last-child {
    position: absolute;
    inset: 0;
    z-index: 2;
    left: 2px;
    clip-path: inset(50% 0);
    background: var(--color-lightDark);
    animation: ${anim} 2s linear infinite alternate;
  }
`;

export default function Glitch() {
  return (
    <Wrapper>
      <span>GLITCH</span>
      <span>GLITCH</span>
    </Wrapper>
  );
}
