import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";
import AnimationWrapper from "../FramerMotion";

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
