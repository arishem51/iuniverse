import styled from "styled-components";

export default styled.div`
  --size-sm: 48px;
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  border-color: black;
  border-width: 2px 2px 50px 2px;
  border-style: solid;
  ::after {
    content: "";
    display: block;
    width: var(--size-sm);
    height: var(--size-sm);
    position: absolute;
    border-radius: 50%;
    background-color: black;
    border: 20px solid white;
    top: 50%;
    right: 0px;
  }
  ::before {
    content: "";
    display: block;
    width: var(--size-sm);
    height: var(--size-sm);
    position: absolute;
    border-radius: 50%;
    background-color: white;
    border: 20px solid black;
    top: 50%;
  }
`;
