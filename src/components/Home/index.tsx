import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ElementsContext from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import Footer from "../Footer";
import Header from "../Header";

const MinHeight = styled(FlexContainer)`
  min-height: 100vh;
  background: var(--color-dark);
`;

export default function Home() {
  return (
    <ElementsContext>
      <MinHeight column>
        <Header />
        <Outlet />
        <Footer />
      </MinHeight>
    </ElementsContext>
  );
}
