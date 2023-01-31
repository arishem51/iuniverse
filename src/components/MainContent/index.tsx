import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";

const Flex = styled(motion.div)`
  display: flex;
  flex: 1;
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex-direction: column;
  }
  padding: var(--space-s) 0;
  background: var(--color-dark);
`;

export default function MainContent() {
  return (
    <Flex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Sidebar />
      <ListComponent />
    </Flex>
  );
}
