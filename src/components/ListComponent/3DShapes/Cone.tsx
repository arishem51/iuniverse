import styled from "styled-components";

const Wrapper = styled.div`
  perspective: 500px;
  width: 50%;
  height: 50%;
`;

const Bottom = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #304ffe;
  opacity: 0.7;
  transform: skewX(20deg) skewY(20deg);
  border: 1px solid white;
`;

export default function Cone() {
  return (
    <Wrapper>
      <Bottom />
    </Wrapper>
  );
}
