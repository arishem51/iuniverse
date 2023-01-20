import ElementsContext from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

export default function MainContent() {
  return (
    <ElementsContext>
      <FlexContainer>
        <Sidebar />
        <ListComponent />
      </FlexContainer>
    </ElementsContext>
  );
}
