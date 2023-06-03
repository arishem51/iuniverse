import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

export default styled.div`
  width: 0;
  height: 100px;
  position: relative;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 40px solid var(--color-lgihtGrey);
  top: -25%;
  ::after {
    content: "";
    width: 100px;
    height: 0;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 50px solid var(--color-lgihtGrey);
    bottom: -150%;
    left: -50px;
  }
`;
