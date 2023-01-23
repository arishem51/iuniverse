import { Outlet } from "react-router-dom";
import ElementsContext from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import Header from "../Header";

export default function Home() {
  return (
    <ElementsContext>
      <FlexContainer column>
        <Header />
        <Outlet />
      </FlexContainer>
    </ElementsContext>
  );
}
