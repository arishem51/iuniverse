import { renderArray } from "@helper";
import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 54px;
  height: 54px;
  position: relative;
`;

const fade = keyframes`
    0%{
        opacity: 1;
    }100%{
        opacity: 0.25;
    }
`;

const Line = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 10%;
  height: 32%;
  border-radius: 1em;
  background-color: var(--color-lightGrey);
  transform-origin: bottom center;
  transform: rotate(calc(var(--index) * 30deg)) translateY(-0.8em);
  animation: ${fade} 1s linear infinite;
  animation-delay: calc(var(--index) * 0.08s);
`;

const LINE_COUNT = 12;

const renderItem = () =>
  renderArray(LINE_COUNT, ({ id }, index) => (
    <Line key={id} style={{ "--index": index } as CSSProperties} />
  ));

const IphoneLoading = () => {
  return <Container>{renderItem()}</Container>;
};

export default IphoneLoading;
