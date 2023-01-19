import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #6c5ce7;
  border-radius: 4px;
  color: var(--color-white);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 5px 0 0 #a29bfe;
  transition: all 0.1s ease;
  :active {
    translate: 0 5px;
    box-shadow: 0 0 0 0 #a29bfe;
  }
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function KeyboardButton({
  children = "Click me",
  ...props
}: Props) {
  return <Wrapper children={children} {...props} />;
}
