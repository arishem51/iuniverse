import React from "react";
import styled from "styled-components";

// Made by @Tiagoadag --> https://uiverse.io/Tiagoadag/cuddly-catfish-6

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  background-color: none;
  border-radius: 2rem;
  transition: box-shadow 0.3s;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: inherit;
    z-index: 1;
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--color-dark);
    border-radius: inherit;
    z-index: 2;
    scale: 1.005;
    transition: scale 0.3s;
  }
  :hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
    ::before {
      scale: 0.98;
    }
  }
`;

export default function CardShadowHover() {
  return <Wrapper />;
}
