import styled from "styled-components";

const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  background: linear-gradient(
    141deg,
    rgba(191, 102, 255, 1) 0%,
    rgba(98, 72, 255, 1) 50%,
    rgba(0, 221, 235, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
`;

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink(props: Props) {
  return <Wrapper {...props} />;
}
