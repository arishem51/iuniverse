import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  ::after {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: var(--color-lightGray);
    rotate: 20deg;
  }
  ::before {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: var(--color-lightGray);
    rotate: 155deg;
  }
`;
