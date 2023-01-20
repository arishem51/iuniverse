import { PropsWithChildren } from "react";
import styled from "styled-components";

const FlexWrapper = styled.div<{ center?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "start")};
  align-items: ${(props) => (props.center ? "center" : "stretch")};
`;

type FlexProps = { center?: boolean } & PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

export function Flex({ ...props }: FlexProps) {
  return <FlexWrapper {...props} />;
}

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`;

type ButtonProps = {} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonBase({ ...props }: ButtonProps) {
  return <ButtonWrapper {...props} />;
}
