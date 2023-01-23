import styled from "styled-components";

const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  background: var(--background);
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
`;

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function ExternalLink({ target = "_blank", ...props }: Props) {
  return <Wrapper target={target} {...props} />;
}

export const UiVerseLink = styled(ExternalLink)`
  --background: linear-gradient(
    141deg,
    rgba(191, 102, 255, 1) 0%,
    rgba(98, 72, 255, 1) 50%,
    rgba(0, 221, 235, 1) 100%
  );
`;

export const CodePenLink = styled(ExternalLink)`
  --background: linear-gradient(
    98deg,
    rgba(138, 81, 143, 1) 18%,
    rgba(164, 67, 67, 1) 50%,
    rgba(34, 54, 182, 1) 88%
  );
`;

export const CssTrickLink = styled(ExternalLink)`
  --background: linear-gradient(
    98deg,
    rgba(143, 81, 81, 1) 10%,
    rgba(164, 104, 67, 1) 47%,
    rgba(182, 34, 47, 1) 97%
  );
`;
