import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
    from { transform: rotateY(0) rotateX(0) rotateZ(0); }
  to { transform: rotateY(360deg) rotateX(720deg) rotateZ(360deg); }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  perspective: 800px;
  perspective-origin: top right;
`;

const WrapCube = styled.div`
  width: 50%;
  height: 50%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${Rotate} 10s linear infinite;
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border: 2px solid white;
`;

const FrontSide = styled(Side)`
  background-color: #304ffe;
  transform: translateZ(50px);
`;
const BackSide = styled(Side)`
  background-color: #304ffe;
  transform: translateZ(-50px);
`;

const LeftSide = styled(Side)`
  background-color: #304ffe;
  transform: rotateY(90deg) translateZ(50px);
`;
const RightSide = styled(Side)`
  background-color: #304ffe;
  transform: rotateY(-90deg) translateZ(50px);
`;

const TopSide = styled(Side)`
  background-color: #304ffe;
  transform: rotateX(90deg) translateZ(50px);
`;
const BottomSide = styled(Side)`
  background-color: #304ffe;
  transform: rotateX(-90deg) translateZ(50px);
`;

export default function Cube() {
  return (
    <Container>
      <WrapCube>
        <FrontSide />
        <BackSide />
        <LeftSide />
        <RightSide />
        <TopSide />
        <BottomSide />
      </WrapCube>
    </Container>
  );
}
