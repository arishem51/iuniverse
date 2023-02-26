import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

export default styled.div`
  --width: 90px;
  width: var(--width);
  height: 50px;
  position: relative;
  background-color: var(--color-lightGray);
  ::after {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 2) solid transparent;
    border-right: calc(var(--width) / 2) solid transparent;
    border-bottom: 25px solid var(--color-lightGray);
    top: -26px;
  }
  ::before {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 2) solid transparent;
    border-right: calc(var(--width) / 2) solid transparent;
    border-top: 25px solid var(--color-lightGray);
    top: 51px;
  }
`;
