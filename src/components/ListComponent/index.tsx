import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useElements } from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-dark);
  padding-left: 3rem;
  @media (width < 1300px) {
    padding-left: 0;
  }
`;

const Text = styled.h1`
  margin-bottom: 3rem;
  color: var(--color-white);
  @media (width < 1300px) {
    text-align: center;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, min-content));
  gap: 1rem;
  padding-bottom: 4rem;
  @media (width < 1300px) {
    justify-content: center;
  }
`;

const ListItem = styled(FlexContainer)`
  min-height: 250px;
  background-color: var(--color-lightDark);
  border-radius: 1rem;
  padding: 3rem 0;
`;

export default function ListComponent() {
  const { id } = useParams();
  const { elements: list } = useElements();

  const elements =
    id === "all" ? list : list.filter((item) => item.type === id);

  function renderItem() {
    if (elements.length === 0) {
      return <Text>No component yet</Text>;
    }
    return elements.map((item, index) => (
      <ListItem center key={`${item.type} - ${index + 1}`}>
        {item.component}
      </ListItem>
    ));
  }

  return (
    <Wrapper>
      <Text>{elements.length} components</Text>
      <ListWrapper>{renderItem()}</ListWrapper>
    </Wrapper>
  );
}
