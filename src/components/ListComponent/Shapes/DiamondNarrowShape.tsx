import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

export default styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 70px solid var(--color-lightGray);
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    top: 50%;
  }
  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 70px solid var(--color-lightGray);
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    top: -20%;
  }
`;
