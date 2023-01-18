import styled from "styled-components";

export default styled.div`
  --width: 90px;
  width: var(--width);
  height: 50px;
  position: relative;
  background-color: black;
  top: 30px;
  ::after {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 3.5) solid transparent;
    border-right: calc(var(--width) / 3.5) solid transparent;
    border-bottom: 25px solid black;
    top: -24.5px;
    width: 90px;
  }
  ::before {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 3.5) solid transparent;
    border-right: calc(var(--width) / 3.5) solid transparent;
    border-top: 25px solid black;
    top: 50px;
    width: 90px;
  }
`;
