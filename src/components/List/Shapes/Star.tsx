import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

const SixPoints = styled.div`
  width: 0;
  height: 0;
  position: relative;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid var(--color-lightGrey);
  top: -15px;
  ::after {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    border-left: inherit;
    border-right: inherit;
    border-top: 100px solid var(--color-lightGrey);
    top: 30px;
    left: -50px;
  }
`;
const FivePoints = styled.div`
  width: 0;
  height: 150px;
  position: relative;
  top: -100px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 60px solid var(--color-lightGrey);
  ::after {
    content: "";
    position: absolute;
    top: 145px;
    left: -102px;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 60px solid var(--color-lightGrey);
    rotate: 32deg;
  }
  ::before {
    content: "";
    position: absolute;
    top: 145px;
    left: -97px;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 60px solid var(--color-lightGrey);
    rotate: -32deg;
  }
`;

const Star = {
  SixPoints,
  FivePoints,
};

export default Star;
