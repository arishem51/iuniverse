import styled, { keyframes } from "styled-components";

// Made by @alexruix --> https://uiverse.io/alexruix/white-cat-50

const rotate = keyframes`
    25%{
        translate: 0 0;
        rotate: 0;
        border-bottom-right-radius: 10px;
    }
    50%{
        translate: 0 15px;
        rotate: 45deg;
        border-bottom-right-radius:30px;
    }
    75%{
        rotate: 70deg;
    }
    100%{
        border-bottom-right-radius:0;
        translate: 0 0;
        rotate: 90deg;
    }
`;

const shadow = keyframes`
    0%,100%{
        scale: 1 1
    }50%{
        scale: 1.2 1.2
    }
`;

const Wrapper = styled.div<{ index: number }>`
  position: relative;
  width: 50px;
  height: 50px;
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #f08080;
    border-radius: 4px;
    animation: ${rotate} 0.5s linear infinite;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 5px;
    width: 100%;
    background: #f0808050;
    border-radius: 50%;
    animation: ${shadow} 0.5s linear infinite alternate;
  }
`;

export default function BoxRotate({ index = 1 }) {
  return <Wrapper index={index} />;
}
