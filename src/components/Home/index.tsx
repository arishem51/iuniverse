import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ElementsContext from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import Footer from "../Footer";
import Header from "../Header";

const FullHeight = styled(FlexContainer)`
  height: 100%;
  background: var(--color-dark);
`;

const Space = styled.div`
  flex-basis: 5vh;
  height: 5vh;
  width: 100%;
  background: var(--color-dark);
`;

export default function Home() {
  return (
    <ElementsContext>
      <FullHeight column>
        <Header />
        <Outlet />
        <Footer />
      </FullHeight>
    </ElementsContext>
  );
}
