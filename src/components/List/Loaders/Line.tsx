import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 3px;
  background: var(--color-dark);
  border-radius: 16px;
  overflow: hidden;
`;

const Scale = keyframes`
    0% {
        transform: scaleX(0);
    } 50% {
        transform-origin: left;
        transform: scaleX(1);
    }
    51%{
        transform-origin: right;
    }
    100%{
        transform: scaleX(0);
        transform-origin: right;
    }
`;

const LineAnimation = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-lightGrey);
  animation: ${Scale} 2s infinite both;
  transform-origin: left;
`;

const Line = () => {
  return (
    <Wrapper>
      <LineAnimation />
    </Wrapper>
  );
};

export default Line;
