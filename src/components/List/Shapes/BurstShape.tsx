import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

export default styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  ::after {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: var(--color-lgihtGrey);
    rotate: 20deg;
  }
  ::before {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: var(--color-lgihtGrey);
    rotate: 155deg;
  }
`;
