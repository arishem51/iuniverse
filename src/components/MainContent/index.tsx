import ElementsContext from "../../Context/ElementsContext";
import { Flex } from "../Base";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

export default function MainContent() {
  return (
    <ElementsContext>
      <Flex>
        <Sidebar />
        <ListComponent />
      </Flex>
    </ElementsContext>
  );
}
