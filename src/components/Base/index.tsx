import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const FlexWrapper = styled.div<{ center?: boolean; column?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "start")};
  align-items: ${(props) => (props.center ? "center" : "stretch")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

type FlexProps = { center?: boolean; column?: boolean } & PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

export function FlexContainer({ ...props }: FlexProps) {
  return <FlexWrapper {...props} />;
}

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`;

type ButtonProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonContainer({ ...props }: ButtonProps) {
  return <ButtonWrapper {...props} />;
}

const ImageWrapper = styled.img`
  width: 200px;
  aspect-ratio: 1;
`;

type ImageProps = PropsWithChildren & React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageContainer({
  loading = "eager",
  alt = "...",
  ...props
}: ImageProps) {
  return <ImageWrapper loading={loading} alt={alt} {...props} />;
}
