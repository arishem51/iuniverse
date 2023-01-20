import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBase, Flex } from "../Base";
import ExternalLink from "../ExternalLink";

const Wrapper = styled(Flex)`
  flex-direction: column;
  background-color: var(--color-dark);
  gap: 16px;
  min-height: 95vh;
`;

const HeadingText = styled.h1`
  color: var(--color-white);
  font-size: 56px;
`;

const ButtonLink = styled(Link)`
  font-weight: 700;
  color: var(--color-dark);
`;

const ButtonStyled = styled(ButtonBase)`
  padding: 12px 24px;
  background-color: var(--color-white);
  color: var(--color-dark);
  border-radius: 30px;
`;

export default function HomePage() {
  return (
    <Wrapper center>
      <HeadingText>
        This project is for learning purpose inspired by{" "}
        <ExternalLink href="https://uiverse.io/" target="_blank">
          uiverse
        </ExternalLink>
      </HeadingText>
      <ButtonLink to="/all">
        <ButtonStyled>Go to the components</ButtonStyled>
      </ButtonLink>
    </Wrapper>
  );
}
