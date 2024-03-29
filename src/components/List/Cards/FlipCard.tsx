import styled from "styled-components";
import { FlexContainer } from "@components";

const Side = styled(FlexContainer)`
  position: absolute;
  inset: 0;
  background-color: var(--color-lightGrey);
  font-size: 32px;
  backface-visibility: hidden;
`;

const Front = styled(Side)``;

const Back = styled(Side)`
  rotate: y 180deg;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: rotate 1s;
  transform-style: preserve-3d;
`;

const HoverContainer = styled.div`
  width: 200px;
  height: 300px;
  perspective: 800px;
  cursor: pointer;
  :hover {
    ${Wrapper} {
      rotate: y 180deg;
    }
  }
`;

export function FlipCard() {
  return (
    <HoverContainer>
      <Wrapper>
        <Front center>Front</Front>
        <Back center>Back</Back>
      </Wrapper>
    </HoverContainer>
  );
}
