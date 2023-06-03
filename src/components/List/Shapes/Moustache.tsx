import styled, { keyframes } from "styled-components";

// This shape made by Wenting Zhang --> Link: https://www.youtube.com/watch?v=CsD7C9KKFa4

const right = keyframes`
    from {
        rotate: 30deg;
    }
    to {
        rotate: 18deg; 
    }
`;

const left = keyframes`
    from {
        rotate: -30deg;
    }
    to {
        rotate: -18deg;
    }
`;

export default styled.div`
  position: relative;
  bottom: 50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: -20px 50px 0 0 var(--color-lightGrey),
    20px 50px 0 0 var(--color-lightGrey);
  ::after {
    content: "";
    position: absolute;
    top: -2px;
    right: 35px;
    width: 100px;
    height: 100px;
    border-bottom: 50px solid var(--color-lightGrey);
    border-radius: 0 0 0 100%;
    transform-origin: right 100px;
    animation: ${left} 750ms ease-in-out infinite alternate;
  }
  ::before {
    content: "";

    position: absolute;
    top: -2px;
    left: 35px;
    width: 100px;
    height: 100px;
    border-radius: 0 0 100% 0;
    border-bottom: 50px solid var(--color-lightGrey);
    transform-origin: left 100px;
    animation: ${right} 750ms ease-in-out infinite alternate;
  }
`;
