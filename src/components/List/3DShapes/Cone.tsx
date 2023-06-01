import styled from "styled-components";

const Wrapper = styled.div`
  perspective: 500px;
  width: 50%;
  height: 50%;
`;

const Bottom = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #304ffe;
  transform: skewX(20deg) skewY(20deg);
  border: 1px solid white;
`;

export function Cone() {
  return (
    <Wrapper>
      <Bottom />
    </Wrapper>
  );
}
