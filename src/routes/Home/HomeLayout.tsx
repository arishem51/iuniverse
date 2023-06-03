import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header, FlexContainer } from "@components";
import ElementsProvider from "@context/ElementsProvider";

const MinHeight = styled(FlexContainer)`
  min-height: 100vh;
  background: var(--color-dark);
`;

export default function HomeLayout() {
  return (
    <ElementsProvider>
      <MinHeight column>
        <Header />
        <Outlet />
        <Footer />
      </MinHeight>
    </ElementsProvider>
  );
}
