import { Link } from "react-router-dom";
import styled from "styled-components";
import { useElements } from "../../Context/ElementsContext";
import { Type } from "../../types";
import { ButtonContainer, FlexContainer } from "../Base";

const Wrapper = styled(FlexContainer)`
  flex-direction: column;
  width: 60%;
  margin: 1rem auto;
`;

const Heading = styled.h2`
  color: var(--color-white);
  font-size: var(--step-2);
  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: left;
`;

const Child = styled(FlexContainer)`
  flex: 1;
  min-height: 250px;
  padding: 3rem 0;
  background-color: var(--color-lightDark);
  border-radius: 1rem;
`;
const List = styled(FlexContainer)`
  gap: 2rem;
  margin: 2rem 0;
`;

const Button = styled(ButtonContainer)`
  padding: 12px 24px;
  border-radius: 30px;
  background: var(--color-lightDark);
  color: var(--color-white);
  font-weight: 700;
`;

const NavLink = styled(Link)`
  all: unset;

  align-self: center;
`;

type Props = {
  type: Type;
};

export default function PreviewComponent({ type }: Props) {
  const { elements } = useElements();
  if (type === "all" || elements.length === 0) {
    return null;
  }

  function renderItem() {
    return elements
      .filter((item) => item.type === type)
      .slice(0, 4)
      .map((item, index) => (
        <Child key={index} center>
          {item.component}
        </Child>
      ));
  }

  return (
    <Wrapper>
      <Heading>{type}s</Heading>
      <List>
        {elements
          .filter((item) => item.type === type)
          .slice(0, 4)
          .map((item, index) => (
            <Child center key={index}>
              {item.component}
            </Child>
          ))}
      </List>
      <NavLink to={`/${type}`}>
        <Button>See all buttons</Button>
      </NavLink>
    </Wrapper>
  );
}
