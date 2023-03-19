import { motion, Transition, Variants } from "framer-motion";
import styled from "styled-components";
import { ImageContainer } from "../../Base";

const Wrapper = styled(motion.div)`
  position: relative;
`;

const Image = styled(ImageContainer)`
  padding: 1rem;
`;

const Stack = styled(motion.div)<{ isTop?: boolean }>`
  position: absolute;
  top: ${(props) => (props.isTop ? "0" : "100%")};

  height: 5px;
  width: 100%;

  background: var(--color-white);
`;

const transition: Transition = {
  duration: 0.2,
  ease: "linear",
};

const wrapperVariants: Variants = {
  initial: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
};

const stackVariants: Variants = {
  initial: {
    scaleX: 0.4,
  },
  hover: {
    scaleX: 1,
  },
};

export default function Component() {
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="initial"
      whileHover="hover"
      transition={transition}
    >
      <Image srcId={355} src="https://picsum.photos/id/355/200" />
      <Stack isTop variants={stackVariants} transition={transition} />
      <Stack variants={stackVariants} transition={transition} />
    </Wrapper>
  );
}
