import styled from "styled-components";

const Wrapper = styled.div`
  --color: #1095c1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 0 0.5em;
`;

const Text = styled.h1`
  position: relative;
  z-index: 3;
  color: var(--color);
  font-size: 4em;
  transition: color 0.3s 0.1s;
  ${Wrapper}:hover & {
    color: var(--color-white);
  }
`;

const Side = styled.div`
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 125%;
  height: 200%;
  translate: 0 -50%;
  transition: transform 0.3s;

  transform: var(--transform);
  background: var(--background);

  ${Wrapper}:hover & {
    transform: translateX(0%);
    translate: 0 0;
  }
`;

const LeftSide = styled(Side)`
  --background: conic-gradient(
    from 210deg,
    var(--color) 120deg,
    transparent 0 0
  );
  --transform: translateX(-50%);
`;

const RightSide = styled(Side)`
  --background: conic-gradient(
    from -30deg,
    var(--color) 240deg,
    transparent 0 0
  );
  --transform: translateX(50%);
`;

export default function Component() {
  return (
    <Wrapper>
      <Text>Hover Me</Text>
      <LeftSide />
      <RightSide />
    </Wrapper>
  );
}
