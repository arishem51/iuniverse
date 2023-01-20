import styled, { keyframes } from "styled-components";

const LeftDotAnim = keyframes`
   0%{
        rotate:0deg;
   }25%{
        rotate:70deg
    } 
   50%{
        rotate:0deg
    } 
`;

const RightDotAnim = keyframes`
   50%{
        rotate:0deg
    } 
   75%{
        rotate: -70deg;
   }
   100%{
        rotate: 0;
   }
`;

const Dot = styled.div`
  width: 10px;
  height: 50px;
  transform-origin: 50% 0%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Dot}:first-child {
    animation: ${LeftDotAnim} 1.5s linear infinite;
  }
  ${Dot}:last-child {
    animation: ${RightDotAnim} 1.5s linear infinite;
  }
`;

export default function Component() {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
}
