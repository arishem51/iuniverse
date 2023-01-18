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
  background-color: var(--color-dark);
  gap: 16px;
  min-height: 95vh;
`;

const HeadingText = styled.h1`
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
      <HeadingText>
        This project is for learning purpose inspired by{" "}
        <ExternalLink href="https://uiverse.io/" target="_blank">
          uiverse
        </ExternalLink>
      </HeadingText>
      <ButtonLink to="/all">
        <Button>Go to the components</Button>
      </ButtonLink>
    </Wrapper>
  );
}
