import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

export default function MainContent() {
  const { id } = useParams();

  console.log(id);

  return (
    <Wrapper>
      <Sidebar />
      <ListComponent />
    </Wrapper>
  );
}
