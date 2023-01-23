import styled, { keyframes } from "styled-components";

/*
    Made by @Navarog21 - https://uiverse.io/Navarog21/little-falcon-37
*/

const Child = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: black;
  box-shadow: inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white;
  border-radius: 50%;
`;

const rotate = keyframes`
    0%{
        rotate: 0;
    }100%{
        rotate: 360deg;
    }
`;

const oddJump = keyframes`
     0%{
        translate: -50% 0;
    }25%{
        translate: -50% var(--translate);
    }40%{
        translate: -50% 0;
    }
`;

const evenJump = keyframes`
    0%{
        translate:0 -50% ;
    }25%{
        translate:var(--translate) -50% ;
    }40%{
        translate:0 -50% ;
    }
    

`;

const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-black);
  box-shadow: inset 0px 0px 10px purple,
    inset 5px 5px 12px rgba(44, 0, 114, 0.8),
    inset 8px 8px 1px rgba(160, 120, 255, 0.7),
    0px 0px 1px rgba(160, 120, 255, 0.6);
  animation: ${rotate} 1s linear infinite;
  ${Child}:nth-child(odd) {
    left: 50%;
    translate: -50% 0;
    top: min(calc((var(--index) - 1) * 100% - 15px), 100%);
    animation: ${oddJump} calc(1s + (var(--index) * 0.25s)) linear infinite
      alternate calc((var(--index) - 1) * 1s);
  }
  ${Child}:nth-child(even) {
    top: 50%;
    translate: 0 -50%;
    left: min(calc((var(--index) - 2) * 100% - 15px), 100%);
    animation: ${evenJump} calc(1s + (var(--index) * 0.25s)) linear infinite
      alternate calc((var(--index) - 1) * 1s);
  }
`;

const TranslateYObj = ["-300%", "-300%", "300%", "300%"];

function renderItem() {
  return new Array(4).fill(" ").map((_, index) => {
    return (
      <Child
        key={index}
        style={
          {
            "--index": index + 1,
            "--translate": TranslateYObj[index],
          } as React.CSSProperties
        }
      />
    );
  });
}

export default function Navarog21() {
  return <Wrapper>{renderItem()}</Wrapper>;
}
