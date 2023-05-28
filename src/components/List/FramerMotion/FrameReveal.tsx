import { ImageContainer } from "@components";
import styled from "styled-components";
import { motion, Transition, Variants } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
const Image = styled(ImageContainer)`
  padding: 1rem;
`;

const BottomStack = styled(motion.div)`
  position: absolute;
  bottom: 0;

  background: var(--color-white);
  height: 5px;
  width: 100%;
  transform-origin: center center;
`;

const LeftStack = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;

  background: var(--color-white);
  width: 5px;
  height: 100%;
`;

const RightStack = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;

  background: var(--color-white);
  width: 5px;
  height: 100%;
`;

const TIME = 300 / 1000; // Miliseconds

const transition: Transition = {
  duration: TIME,
  ease: "linear",
};

const wrapperVariants: Variants = {
  initial: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
    transition: {
      ...transition,
    },
  },
};

const bottomStackVariants: Variants = {
  initial: {
    scaleX: 0.3,
    transition: {
      ...transition,
    },
  },
  hover: {
    scaleX: 1,
    transition: {
      ...transition,
    },
  },
};

const TopStack = styled(motion.div)`
  position: absolute;
  top: 0;

  background: var(--color-white);
  height: 5px;
  width: 100%;
`;

const horizontalStackVariants: Variants = {
  initial: {
    transform: "translate(0%,100%)",
  },
  hover: {
    transform: "translate(0%,0%)",
    transition: {
      ...transition,
      delay: TIME,
    },
  },
};

const topLeftStackVariants: Variants = {
  initial: {
    transform: "translate(-100%,0%)",
  },
  hover: {
    transform: "translate(-50%,0%)",
    transition: {
      ...transition,
      delay: TIME * 2,
    },
  },
};

const topRightStackVariants: Variants = {
  initial: {
    transform: "translate(100%,0%)",
  },
  hover: {
    transform: "translate(50%,0%)",
    transition: {
      ...transition,
      delay: TIME * 2,
    },
  },
};

export default function Component() {
  return (
    <Wrapper
      initial="initial"
      whileHover="hover"
      variants={wrapperVariants}
      transition={transition}
    >
      <Image srcId={211} src="https://picsum.photos/id/211/200" />
      <BottomStack
        variants={bottomStackVariants}
        transition={{ ...transition, delay: TIME * 2 }}
      />
      <LeftStack
        variants={horizontalStackVariants}
        transition={{ ...transition, delay: TIME }}
      />
      <RightStack
        variants={horizontalStackVariants}
        transition={{ ...transition, delay: TIME }}
      />
      <TopStack variants={topLeftStackVariants} transition={transition} />
      <TopStack variants={topRightStackVariants} transition={transition} />
    </Wrapper>
  );
}
