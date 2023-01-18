import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border: 20px solid var(--color-lightGray);
    left: -60%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    rotate: -45deg;
  }
  ::before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border: 20px solid var(--color-lightGray);
    left: 60%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    rotate: 135deg;
  }
`;
