import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../../Base";

// Made by @mobinkakei --> https://uiverse.io/mobinkakei/grumpy-turtle-41

const bouncing = keyframes`
    0%{
        translate: 0 0 0;
        scale: 1 1;
    }75%{
        scale: 1 1;
    } 
    100%{
        translate: 0 60px 0;
        scale: 1.8 0.4;
    }
`;

const shadowAnim = keyframes`
    0%{
        scale: .5 1;
        opacity: .4;
    }
    100%{
        opacity: 1;
        scale: 1.2 1;
    }
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-lightGray);
  animation: ${bouncing} 0.5s linear alternate infinite;
  animation-timing-function: cubic-bezier(0.5, 0, 0.62, 0.78);
  animation-delay: calc((var(--index) - 1) * 0.1s);
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 4px;
  border-radius: 50%;
  color: var(--color-dark);
  background: currentColor;
  opacity: 0.9;
  filter: blur(1.5px);
  animation: ${shadowAnim} 0.5s linear alternate infinite;
  animation-timing-function: cubic-bezier(1, 0, 0.62, 0.78);
  animation-delay: calc((var(--index) - 1) * 0.1s);
`;

const Wrapper = styled(FlexContainer)`
  position: relative;
  justify-content: space-between;
  width: 160px;
  height: 80px;
  background-color: transparent;
  isolation: isolate;
  ${Ball}:first-child {
    --index: 1;
  }
  ${Ball}:nth-child(2) {
    --index: 2;
  }
  ${Ball}:nth-child(3) {
    --index: 3;
  }
  ${Shadow}:nth-child(4) {
    --index: 1;
  }
  ${Shadow}:nth-child(5) {
    --index: 2;
    translate: -50% 0;
    left: 50%;
  }
  ${Shadow}:nth-child(6) {
    --index: 3;
    right: 0;
  }
`;

export default function BouncingBall() {
  return (
    <Wrapper>
      <Ball />
      <Ball />
      <Ball />
      <Shadow />
      <Shadow />
      <Shadow />
    </Wrapper>
  );
}
