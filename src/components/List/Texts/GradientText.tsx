import styled, { keyframes } from "styled-components";

const bgPosition = keyframes`
    0%{
        background-position: 0 0;
    }100%{
        background-position: 300% 0;
    }
`;

const Text = styled.h1`
  background: linear-gradient(
    90deg,
    rgba(207, 25, 25, 1) 0%,
    rgba(215, 222, 16, 1) 35%,
    rgba(50, 223, 18, 1) 70%,
    rgba(207, 26, 26, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 7em;
  text-transform: capitalize;
  background-size: 300%;
  animation: ${bgPosition} 10s linear infinite;
  will-change: background-position;
`;

export default function GradientText() {
  return <Text>Text</Text>;
}
