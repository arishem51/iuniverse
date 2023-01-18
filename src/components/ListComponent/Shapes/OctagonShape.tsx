import styled from "styled-components";

export default styled.div`
  --width: 90px;
  width: var(--width);
  height: 50px;
  position: relative;
  background-color: var(--color-lightGray);
  ::after {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 3.5) solid transparent;
    border-right: calc(var(--width) / 3.5) solid transparent;
    border-bottom: 25px solid var(--color-lightGray);
    top: -24.5px;
    width: 90px;
  }
  ::before {
    content: "";
    position: absolute;
    border-left: calc(var(--width) / 3.5) solid transparent;
    border-right: calc(var(--width) / 3.5) solid transparent;
    border-top: 25px solid var(--color-lightGray);
    top: 50px;
    width: 90px;
  }
`;
