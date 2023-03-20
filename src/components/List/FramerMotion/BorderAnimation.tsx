import { motion, Transition, Variants } from "framer-motion";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Wrapper = styled(motion.div)`
  position: relative;
`;

const Image = styled(ImageContainer)``;

const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

const Stack = styled(motion.div)`
  background-color: rgba(100, 201, 100, 0.7);
  position: absolute;
`;

const VerticalStack = styled(Stack)<{ direction: "left" | "right" }>`
  width: 1px;
  height: calc(100% + 4rem);
  top: -2rem;

  left: ${(props) =>
    props.direction === "left" ? "-2rem" : "calc(100% + 2rem)"};
`;

const HorizontalStack = styled(Stack)<{ direction: "top" | "bottom" }>`
  width: calc(100% + 4rem);
  height: 1px;
  left: -2rem;

  top: ${(props) =>
    props.direction === "top" ? "-2rem" : "calc(100% + 2rem)"};
`;

const transition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

const wrapperVariants: Variants = {
  initial: {},
  hover: {},
};

const overlayVariants: Variants = {
  initial: {
    outline: "100px solid rgba(0, 0, 0, 0.7)",
    outlineOffset: "-100px",
  },
  hover: {
    outline: "1px solid rgba(100, 201, 100, 0.7)",
    outlineOffset: "24px",
  },
};

const verticalStackVariants: Variants = {
  initial: {},
  hover: (custom) => ({
    translateX: custom === "left" ? "16px" : "-16px",
  }),
};

const horizontalStackVariants: Variants = {
  initial: {},
  hover: (custom) => ({
    translateY: custom === "top" ? "16px" : "-16px",
  }),
};

export default function Component() {
  return (
    <Wrapper
      whileHover="hover"
      initial="initial"
      transition={transition}
      variants={wrapperVariants}
    >
      <Image srcId={391} src="https://picsum.photos/id/391/200" />
      <Overlay variants={overlayVariants} transition={transition} />
      <VerticalStack
        custom="right"
        direction="right"
        variants={verticalStackVariants}
      />
      <VerticalStack
        custom="left"
        direction="left"
        variants={verticalStackVariants}
      />
      <HorizontalStack
        custom="top"
        direction="top"
        variants={horizontalStackVariants}
      />
      <HorizontalStack
        custom="bottom"
        direction="bottom"
        variants={horizontalStackVariants}
      />
    </Wrapper>
  );
}
