import styled from "styled-components";
import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Flex = styled(FlexContainer)`
  flex: 1;
  @media (width < 1300px) {
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
