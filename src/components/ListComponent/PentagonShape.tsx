import styled from "styled-components";

export default styled.div`
  width: 0;
  height: 100px;
  position: relative;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 40px solid black;
  top: -30%;
  ::after {
    content: "";
    width: 100px;
    height: 0;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 50px solid black;
    bottom: -150%;
    left: -50px;
  }
`;
