import { motion, Transition, Variants } from "framer-motion";
import styled from "styled-components";
import { ImageContainer } from "@components";

const Wrapper = styled(motion.div)`
  position: relative;
`;

const Image = styled(ImageContainer)`
  padding: 1rem;
`;

const HorizontalStack = styled(motion.div)<{
  direction: "top" | "bottom";
}>`
  position: absolute;
  top: ${(props) => (props.direction === "top" ? "0" : "100%")};

  height: 5px;
  width: 100%;

  background: var(--color-white);

  transform-origin: ${(props) =>
    props.direction === "top" ? "left" : "right"};
`;

const VerticalStack = styled(motion.div)<{
  direction: "right" | "left";
}>`
  position: absolute;
  top: 0;
  right: ${(props) => (props.direction === "right" ? "0" : "calc(100% - 5px)")};

  height: 100%;
  width: 5px;

  background: var(--color-white);

  transform-origin: ${(props) =>
    props.direction === "right" ? "top" : "bottom"};
`;

const TIME = 250 / 1000;

const transition: Transition = {
  duration: TIME,
  ease: "easeOut",
};

const wrapperVariants: Variants = {
  initial: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
    transition: {
      staggerChildren: TIME,
    },
  },
};

const horizontalStackVariants: Variants = {
  initial: {
    scaleX: 0,
  },
  hover: (custom) => ({
    scaleX: 1,
    transition: {
      ...transition,
      delay: custom ? custom : 0,
    },
  }),
};

const verticalStackVariants: Variants = {
  initial: {
    scaleY: 0,
  },
  hover: (custom) => ({
    scaleY: 1,
    transition: {
      ...transition,
      delay: custom ? custom : 0,
    },
  }),
};

export default function Component() {
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="initial"
      whileHover="hover"
      transition={transition}
    >
      <Image srcId={510} src="https://picsum.photos/id/510/200" />
      <HorizontalStack
        direction="top"
        custom={0}
        variants={horizontalStackVariants}
        transition={{ ...transition, delay: TIME * 3 }}
      />
      <VerticalStack
        direction="right"
        custom={TIME}
        variants={verticalStackVariants}
        transition={{ ...transition, delay: TIME * 2 }}
      />
      <HorizontalStack
        direction="bottom"
        custom={TIME * 2}
        variants={horizontalStackVariants}
        transition={{ ...transition, delay: TIME }}
      />

      <VerticalStack
        custom={TIME * 3}
        direction="left"
        variants={verticalStackVariants}
        transition={transition}
      />
    </Wrapper>
  );
}
