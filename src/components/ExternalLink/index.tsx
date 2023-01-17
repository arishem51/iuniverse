import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  all: unset;
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  cursor: pointer;
  :hover {
    &::after {
      transform-origin: left;
      scale: 1 1;
    }
  }
  ::after {
    content: "";
    width: 100%;
    height: 0.1em;
    display: block;
    background-color: white;
    position: absolute;
    bottom: 0;
    scale: 0 1;
    transform-origin: right;
    transition: scale 0.3s;
  }
`;

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink(props: Props) {
  return <Wrapper {...props} />;
}
