import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

export default styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  background-color: var(--color-lightGrey);
  rotate: 45deg;
  ::after {
    content: "";
    width: inherit;
    height: inherit;
    background-color: inherit;
    position: absolute;
    border-radius: 50%;
    left: -25px;
  }
  ::before {
    content: "";
    width: inherit;
    height: inherit;
    background-color: inherit;
    position: absolute;
    border-radius: 50%;
    top: -25px;
  }
`;
