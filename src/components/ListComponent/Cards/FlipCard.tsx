import styled from "styled-components";

const Side = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-lightGray);
  font-size: 32px;
`;

const Front = styled(Side)``;

const Back = styled(Side)`
  rotate: y 180deg;
  backface-visibility: hidden;
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

export default function FlipCard() {
  return (
    <HoverContainer>
      <Wrapper>
        <Front>Front</Front>
        <Back>Back</Back>
      </Wrapper>
    </HoverContainer>
  );
}
