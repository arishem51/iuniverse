import { Outlet } from "react-router-dom";
import { FlexContainer } from "../Base";
import Header from "../Header";

export default function Home() {
  return (
    <FlexContainer column>
      <Header />
      <Outlet />
    </FlexContainer>
  );
}
