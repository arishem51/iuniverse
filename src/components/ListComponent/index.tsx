import { useParams } from "react-router-dom";
import styled from "styled-components";
import BurstShape from "./BurstShape";
import CurvedTailArrowShape from "./CurvedTailArrowShape";

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-dark);
`;

const Text = styled.h1`
  margin-bottom: 3rem;
  color: var(--color-white);
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: var(--color-lightDark);
  border-radius: 1rem;
`;

const List = [<BurstShape />, <CurvedTailArrowShape />];

export default function ListComponent() {
  const { id } = useParams();

  function renderItem() {
    return List.map((item, index) => <ListItem key={index}>{item}</ListItem>);
  }

  return (
    <Wrapper>
      <Text>{List.length} components</Text>
      <ListWrapper>{renderItem()}</ListWrapper>
    </Wrapper>
  );
}
