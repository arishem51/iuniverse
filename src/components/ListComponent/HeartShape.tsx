import styled from "styled-components";

export default styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  background-color: black;
  rotate: 45deg;
  left: 10%;
  top: 10%;
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
