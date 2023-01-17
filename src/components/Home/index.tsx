import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
