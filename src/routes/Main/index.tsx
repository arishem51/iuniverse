import styled from "styled-components";
import AnimationWrapper from "../../components/FramerMotion";
import ListComponent from "../../components/ListComponent";
import Sidebar from "../../components/Sidebar";
import { MEDIAQUERY } from "../../constants";

const Flex = styled(AnimationWrapper)`
  display: flex;
  flex: 1;
  padding: var(--space-s) 0;
  background: var(--color-dark);
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex-direction: column;
  }
`;

export default function MainContent() {
  return (
    <Flex>
      <Sidebar />
      <ListComponent />
    </Flex>
  );
}
