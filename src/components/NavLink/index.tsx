import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)``;

type Props = {
  externalLink?: boolean;
} & LinkProps;

const Wrapper = styled(Link)``;

export default function NavLink({ externalLink, ...props }: Props) {
  return <Wrapper {...props} />;
}
