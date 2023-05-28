import React from "react";
import styled from "styled-components";
import { ButtonContainer, FlexContainer } from "@components";

const Box = styled(FlexContainer)`
  position: relative;
  width: 35px;
  height: 40px;
  background: rgb(58, 165, 253);
  color: white;
  font-weight: 700;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: translate 0.2s ease-in-out;
  }
`;

const Wrapper = styled(ButtonContainer)`
  ${Box}:nth-child(even) {
    ::after {
      translate: 0 -100% 0;
    }
  }
  ${Box}:nth-child(odd) {
    ::after {
      translate: 0 100% 0;
    }
  }
  ${Box}:nth-child(1) {
    ::after {
      content: "W";
    }
  }
  ${Box}:nth-child(2) {
    ::after {
      content: "O";
    }
  }
  ${Box}:nth-child(3) {
    ::after {
      content: "R";
    }
  }
  ${Box}:nth-child(4) {
    ::after {
      content: "L";
    }
  }
  ${Box}:nth-child(5) {
    ::after {
      content: "D";
    }
  }
  :hover {
    ${Box} {
      ::after {
        translate: 0 0 0;
      }
    }
  }
`;

export function BoxHoverButton() {
  return (
    <Wrapper>
      <FlexContainer>
        {"hover".split("").map((item) => (
          <Box key={item} center>
            {item.toUpperCase()}
          </Box>
        ))}
      </FlexContainer>
    </Wrapper>
  );
}
