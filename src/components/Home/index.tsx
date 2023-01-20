import { Outlet } from "react-router-dom";
import { Flex } from "../Base";
import Header from "../Header";

export default function Home() {
  return (
    <Flex column>
      <Header />
      <Outlet />
    </Flex>
  );
}
