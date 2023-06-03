import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer, Header, FlexContainer } from "@components";
import { ElementProvider } from "../../context";

const MinHeight = styled(FlexContainer)`
  min-height: 100vh;
  background: var(--color-dark);
`;

export default function HomeLayout() {
  return (
    <ElementProvider>
      <MinHeight column>
        <Header />
        <Outlet />
        <Footer />
      </MinHeight>
    </ElementProvider>
  );
}
