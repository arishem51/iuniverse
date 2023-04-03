import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background: var(--color-white);
`;

export const Gesture = () => {
  return (
    <Wrapper
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -135,
        borderRadius: "100%",
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default Gesture;
