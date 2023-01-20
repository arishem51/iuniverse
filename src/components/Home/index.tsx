import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../Base";
import Header from "../Header";

const Wrapper = styled(Flex)`
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
