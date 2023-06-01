import {
  AnimatePresence,
  motion,
  VariantLabels,
  Variants,
} from "framer-motion";
import styled from "styled-components";

const Text = styled(motion.h1)`
  color: var(--color-white);
`;

const TextItem = styled(motion.span)`
  display: inline-block;
  font-size: 1.5em;
`;

const variants: Variants = {
  init: (index) => ({
    y: "40%",
    opacity: 0,
    transition: { duration: 0.5, delay: index * 0.25 },
  }),
  enter: (index) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: index * 0.25 },
  }),
  exit: (index) => ({
    y: "-40%",
    opacity: 0,
    transition: { duration: 0.5, delay: index * 0.25 },
  }),
};

export default function Component() {
  const [state, setState] = React.useState("Hello World");

  function handleLastItemAnimationEnd(def: VariantLabels, index: number) {
    if (index === state.length - 1 && def === "enter") {
      setTimeout(() => {
        setState((prev) => {
          if (prev === "Arishemm") {
            return "Hello World";
          }
          return "Arishemm";
        });
      }, 1200);
    }
  }

  function renderItem() {
    return state.split("").map((item, index) => {
      if (item === " ") {
        return <span key={"space"}>&nbsp;</span>;
      }
      return (
        <TextItem
          initial="init"
          animate="enter"
          exit="exit"
          custom={index}
          variants={variants}
          onAnimationComplete={(def) =>
            handleLastItemAnimationEnd(def as VariantLabels, index)
          }
          key={item + index}
        >
          {item}
        </TextItem>
      );
    });
  }

  return (
    <Text>
      <AnimatePresence mode="wait">{renderItem()}</AnimatePresence>
    </Text>
  );
}
