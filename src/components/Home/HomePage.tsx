import styled from "styled-components";
import { useElements } from "../../Context/ElementsContext";
import { FlexContainer } from "../Base";
import { CodePenLink, CssTrickLink, UiVerseLink } from "../ExternalLink";
import Footer from "./Footer";
import PreviewComponent from "./PreviewComponents";

const Wrapper = styled(FlexContainer)`
  background-color: var(--color-dark);
  gap: var(--space-m);
  padding: 0 var(--space-m);
`;

const Heading = styled.h1`
  color: var(--color-white);
  font-size: var(--step-5);
  line-height: var(--step-5);
  text-align: center;
`;

const Title = styled.h6`
  color: var(--color-white);
  font-size: var(--step-2);
  text-align: center;
`;

const OpacityTitle = styled(Title)`
  opacity: 0.3;
`;
const FlexTextWrapper = styled(FlexContainer)`
  align-items: flex-end;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  margin: 6rem 0;
`;

export default function HomePage() {
  const { elements } = useElements();

  return (
    <Wrapper center column>
      <TextWrapper>
        <FlexTextWrapper center>
          <Heading>{elements.length}</Heading>
          <OpacityTitle>UI Elements</OpacityTitle>
        </FlexTextWrapper>
        <Title>
          This website is for learning purposes, inspired and referenced by{" "}
          <UiVerseLink href="https://uiverse.io/">uiverse</UiVerseLink> ,
          <CssTrickLink href="https://codepen.io/trending">
            css-tricks
          </CssTrickLink>{" "}
          ,<CodePenLink href="https://css-tricks.com/">codepen</CodePenLink>{" "}
          ,...
        </Title>
      </TextWrapper>
      <PreviewComponent type="button" />
      <PreviewComponent type="loader" />
      <PreviewComponent type="card" />
      <Footer />
    </Wrapper>
  );
}
