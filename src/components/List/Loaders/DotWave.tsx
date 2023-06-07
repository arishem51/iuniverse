import styled, { keyframes } from "styled-components";
import { FlexContainer } from "@components";
import { renderArray } from "@helper";
import { CSSProperties } from "react";

// Made by @G4b4131 --> https://uiverse.io/G4b413l/jolly-kangaroo-36

const Wrapper = styled(FlexContainer)`
  position: relative;
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
  background-color: var(--color-lightGrey);
  border-radius: 50%;
  animation: ${up} 300ms alternate ease-in-out infinite
    calc(var(--index) * 100ms);
`;

const renderItem = () =>
  renderArray(4, ({ id }, index) => (
    <Dot key={id} style={{ "--index": index } as CSSProperties} />
  ));

export function DotWave() {
  return <Wrapper>{renderItem()}</Wrapper>;
}
