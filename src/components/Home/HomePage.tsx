import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ExternalLink from "../ExternalLink";
import NavLink from "../NavLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--color-dark);
  gap: 16px;
`;

const Text = styled.h1`
  color: var(--color-white);
  font-size: 56px;
`;

const ButtonLink = styled(Link)`
  all: unset;
  font-weight: 700;
  color: var(--color-dark);
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Text>
        This project is for learning purpose inspired by{" "}
        <ExternalLink href="https://uiverse.io/" target="_blank">
          uiverse
        </ExternalLink>
      </Text>
      <Button>
        <ButtonLink to="/all">Go to the components</ButtonLink>
      </Button>
    </Wrapper>
  );
}
