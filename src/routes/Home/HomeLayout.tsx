import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "../../components/Base";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ElementsProvider from "../../Context/ElementsProvider";

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
