import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: var(--position);

  width: 100px;
  padding: 0.4em;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 3em;

  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 50px;
  height: 50px;

  background: var(--color-white);
  border-radius: 50%;
`;

const Input = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Component() {
  const [isActive, setIsActive] = React.useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <Wrapper
      onClick={handleClick}
      style={
        { "--position": isActive ? "right" : "left" } as React.CSSProperties
      }
    >
      <Input type="checkbox" />
      <Handle layout transition={spring} />
    </Wrapper>
  );
}
