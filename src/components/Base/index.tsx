import { useQueryClient } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import defaultImage from "../../assets/default-image.jpg";

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
  cursor: pointer;
`;

type ImageProps = { srcId: number } & PropsWithChildren &
  React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageContainer({ alt = "...", srcId, ...props }: ImageProps) {
  const queryClient = useQueryClient();

  const [source, setSource] = React.useState(() => {
    return (
      queryClient.getQueryData<string | undefined>(
        ["list-components", "images", srcId],
        {
          exact: true,
        }
      ) || defaultImage
    );
  });

  function onLoad() {
    if (!props.src || source !== defaultImage) {
      return;
    }
    queryClient.setQueryData(["list-components", "images", srcId], props.src);
    setSource(props.src);
  }

  return (
    <ImageWrapper
      alt={alt}
      width={200}
      height={200}
      {...props}
      src={source}
      onLoad={onLoad}
    />
  );
}

const PatternWrapper = styled.div`
  --size: 200px;
  aspect-ratio: 1;
  width: var(--size);
`;

type PatternProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export function PatternContainer(props: PatternProps) {
  return <PatternWrapper {...props} />;
}
