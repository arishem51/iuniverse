import { motion, MotionProps } from "framer-motion";

export default function HeadingAnimation(props: MotionProps) {
  const {
    animate = { y: 0, opacity: 1 },
    initial = { y: "100%", opacity: 0 },
    transition = { delay: 0.3, type: "spring" },
  } = props;
  return (
    <motion.div
      animate={animate}
      initial={initial}
      transition={transition}
      {...props}
    />
  );
}
