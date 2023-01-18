import styled from "styled-components";

export default styled.div`
  --border-size: 50px;
  position: relative;
  width: 0;
  height: 0;
  border-top: calc(var(--border-size)) solid transparent;
  border-bottom: calc(var(--border-size)) solid transparent;
  border-left: var(--border-size) solid var(--color-white);
  left: 25%;
  rotate: 30deg;
  top: 15px;
  ::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    border-top: 30px solid var(--color-white);
    border-radius: 110px 0 0 0;
    left: -149px;
    top: -20px;
  }
`;
