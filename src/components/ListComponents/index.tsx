import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "@constant";
import { useElements } from "../../contexts";
import { FlexContainer } from "@components";

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-dark);
  padding-left: 3rem;
  @media (${MEDIAQUERY.lessThanTablet}) {
    padding-left: 0;
  }
`;

const Text = styled.h1`
  margin-bottom: 3rem;
  color: var(--color-white);

  user-select: none;
  cursor: pointer;

  @media (${MEDIAQUERY.lessThanTablet}) {
    text-align: center;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, min-content);
  gap: 1rem;
  padding-bottom: 4rem;
  padding: 0 2rem;
  @media (${MEDIAQUERY.lessThanTablet}) {
    justify-content: center;
  }
`;

const ListItem = styled(FlexContainer)`
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
      return null;
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
