import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../../Base";

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

const Dot = styled(FlexContainer)`
  width: 10px;
  height: 50px;
  transform-origin: 50% 0%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

const Wrapper = styled(FlexContainer)`
  position: relative;
  ${Dot}:first-child {
    animation: ${LeftDotAnim} 1.2s linear infinite;
  }
  ${Dot}:last-child {
    animation: ${RightDotAnim} 1.2s linear infinite;
  }
`;

export default function Component() {
  return (
    <Wrapper>
      <Dot center />
      <Dot center />
      <Dot center />
      <Dot center />
    </Wrapper>
  );
}
