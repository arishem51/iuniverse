import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;

const up = keyframes`
    from {
        translate: 0 0;
    } to {
        translate: 0 -20px;
    }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-lightGray);
  border-radius: 50%;
  animation: ${up} 300ms alternate ease-in-out infinite
    calc(var(--index) * 100ms);
`;

export default function DotWave() {
  function renderItem() {
    return new Array(4).fill("").map((_, index) => {
      const styles = { "--index": index } as React.CSSProperties;
      return <Dot style={styles} key={index} />;
    });
  }

  return <Wrapper>{renderItem()}</Wrapper>;
}
