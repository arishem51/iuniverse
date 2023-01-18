import styled, { keyframes } from "styled-components";

const right = keyframes`
    from {
        rotate: 0;
    }
    to {
        rotate: -12deg;
    }
`;

const left = keyframes`
    from {
        rotate: 0;
    }
    to {
        rotate: 12deg;
    }
`;

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  box-shadow: 125px 0 0 0 black, 200px 0 0 0 black;
  margin-top: 55px;
  ::after {
    content: "";
    width: 150px;
    height: 150px;
    position: absolute;
    border-bottom: 100px solid currentColor;
    border-radius: 0 0 0 100%;
    top: -50px;
    left: 20px;
    transform-origin: right 150px;
    animation: ${left} 750ms ease-in-out infinite alternate;
  }
  ::before {
    content: "";
    width: 150px;
    height: 150px;
    position: absolute;
    left: 255px;
    top: -50px;
    border-radius: 0 0 100% 0;
    border-bottom: 100px solid currentColor;
    transform-origin: left 150px;
    animation: ${right} 750ms ease-in-out infinite alternate;
  }
`;
