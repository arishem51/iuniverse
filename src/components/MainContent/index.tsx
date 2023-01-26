import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Flex = styled(FlexContainer)`
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
