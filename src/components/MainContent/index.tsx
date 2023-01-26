import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { FlexContainer } from "../Base";
import Footer from "../Footer";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Flex = styled(FlexContainer)`
  flex: 1;
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex-direction: column;
  }
`;

export default function MainContent() {
  return (
    <Flex>
      <Sidebar />
      <ListComponent />
      <Footer />
    </Flex>
  );
}
