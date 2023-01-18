import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export default function MainContent() {
  return (
    <Wrapper>
      <Sidebar />
      <ListComponent />
    </Wrapper>
  );
}
