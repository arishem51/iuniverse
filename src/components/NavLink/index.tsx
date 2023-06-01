import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  color: var(--color-white);
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    ::after {
      transform-origin: left;
      scale: 1 1;
    }
  }
  ::after {
    content: "";
    display: block;
    height: 2.5px;
    width: 100%;
    background-color: var(--color-white);
    transition: scale 0.3s;
    transform-origin: right;
    scale: 0 1;
  }
`;

export default function NavLink({ style, ...props }: LinkProps) {
  return <Wrapper {...props} />;
}
