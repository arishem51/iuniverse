import React from "react";
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../../Base";

const rain = keyframes`
    0%{
        translate: 0 0;
    
    }35%{
        scale:1 1
    }
        100%{
        translate: 0 100px;
        scale:0 0
    }
`;

const Raindrops = styled.div`
  position: relative;
  top: 9px;
  width: 3px;
  height: 9px;
  background-color: var(--color-white);
  border-radius: 50%;
  animation: ${rain} 0.5s linear infinite;
  animation-delay: ${Math.random}s;
`;

const Cloud = styled(FlexContainer)`
  position: absolute;
  bottom: 50px;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 35%;
  border-radius: 30px;
  background-color: var(--color-white);
  box-shadow: 0 0 20px 10px var(--color-dark);
  ::after {
    content: "";
    position: absolute;
    top: -30px;
    left: 10px;
    width: 50px;
    height: 50px;
    color: var(--color-white);
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 60px -20px 0 20px currentColor;
  }
`;

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 150px;
  height: 100px;
`;

function renderItem() {
  return new Array(24).fill(" ").map((_, index) => {
    return <Raindrops style={{ "--index": index } as React.CSSProperties} />;
  });
}

export default function Rain() {
  return (
    <Wrapper>
      <Cloud>{renderItem()}</Cloud>
    </Wrapper>
  );
}
