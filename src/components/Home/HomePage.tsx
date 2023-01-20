import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer, FlexContainer } from "../Base";
import ExternalLink from "../ExternalLink";

const Wrapper = styled(FlexContainer)`
  background-color: var(--color-dark);
  gap: var(--space-m);
  padding: 0 var(--space-m);
  min-height: 95vh;
`;

const HeadingText = styled.h1`
  color: var(--color-white);
  font-size: var(--step-3);
  text-align: center;
`;

const ButtonLink = styled(Link)`
  font-weight: 700;
  color: var(--color-dark);
`;

const ButtonStyled = styled(ButtonContainer)`
  padding: 12px 24px;
  background-color: var(--color-white);
  color: var(--color-dark);
  border-radius: 30px;
`;

export default function HomePage() {
  return (
    <Wrapper center column>
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
