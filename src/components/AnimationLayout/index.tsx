import React from "react";
import { motion, MotionProps, Variants } from "framer-motion";

const variants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

type Props = MotionProps & { className?: string };
export default function AnimationWrapper({ ...props }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      {...props}
    />
  );
}
