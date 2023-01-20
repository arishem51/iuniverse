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
