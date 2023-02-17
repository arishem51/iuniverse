import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "../../components/Base";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ElementsContext from "../../Context/ElementsContext";

const MinHeight = styled(FlexContainer)`
  min-height: 100vh;
  background: var(--color-dark);
`;

export default function HomeLayout() {
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
