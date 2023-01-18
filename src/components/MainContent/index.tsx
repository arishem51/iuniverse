import { useParams } from "react-router-dom";
import styled from "styled-components";
import ElementsContext from "../../Context/ElementsContext";
import ListComponent from "../ListComponent";
import Sidebar from "../Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

export default function MainContent() {
  return (
    <ElementsContext>
      <Wrapper>
        <Sidebar />
        <ListComponent />
      </Wrapper>
    </ElementsContext>
  );
}
