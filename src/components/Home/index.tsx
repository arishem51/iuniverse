import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ElementsContext from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import Header from "../Header";

const FullHeight = styled(FlexContainer)`
  height: 100%;
`;

export default function Home() {
  return (
    <ElementsContext>
      <FullHeight column>
        <Header />
        <Outlet />
      </FullHeight>
    </ElementsContext>
  );
}
