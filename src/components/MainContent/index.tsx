import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";
import AnimationWrapper from "../FramerMotion";

const Flex = styled(AnimationWrapper)`
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
    <Flex>
      <Sidebar />
      <ListComponent />
    </Flex>
  );
}
