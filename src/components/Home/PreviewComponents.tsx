import { Link } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { useElements } from "../../Context/ElementsContext";
import { RouteItem } from "../../types";
import { ButtonContainer, FlexContainer } from "../Base";

const Wrapper = styled(FlexContainer)`
  flex-direction: column;
  width: 60%;
  margin: 1rem auto;
  flex-wrap: wrap;
  @media (${MEDIAQUERY.lessThanTablet}) {
    width: 80%;
  }
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
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex: 200px;
  }
`;
const List = styled(FlexContainer)`
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
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

const TypeText = styled.span`
  text-transform: capitalize;
`;

type Props = {
  type: RouteItem["urlPath"];
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
      <List>{renderItem()}</List>
      <NavLink to={`/${type}`}>
        <Button>
          See all <TypeText>{type}s</TypeText>
        </Button>
      </NavLink>
    </Wrapper>
  );
}
