import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FlexContainer } from "@components";

const Wrapper = styled.footer`
  width: 100%;
  padding: 24px 0;
  background: var(--color-dark);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
`;

const IconWrapper = styled(FlexContainer)`
  gap: 1.5rem;
`;

const Link = styled.a`
  all: unset;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <Wrapper>
      <IconWrapper center>
        <Link href="https://github.com/arishem51/universe-app" target="_blank">
          <GoMarkGithub color="white" size={24} />
        </Link>
        <Link href="https://twitter.com/HungPhung51" target="_blank">
          <FaTwitter color="white" size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/arishemm/" target="_blank">
          <FaLinkedin color="white" size={24} />
        </Link>
      </IconWrapper>
    </Wrapper>
  );
}
