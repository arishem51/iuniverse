import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

export default function MainContent() {
  return (
    <FlexContainer>
      <Sidebar />
      <ListComponent />
    </FlexContainer>
  );
}
