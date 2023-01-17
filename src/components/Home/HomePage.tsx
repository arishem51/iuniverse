import { Link } from "react-router-dom";
import styled from "styled-components";
import ExternalLink from "../ExternalLink";
import NavLink from "../NavLink";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--color-dark);
  height: 100%;
`;

const Text = styled.h1`
  color: white;
  font-size: 56px;
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
    </Wrapper>
  );
}
