import { createArray } from "@helper";
import styled from "styled-components";

const Container = styled.div`
  --size: 54px;

  position: relative;

  width: var(--size);
  height: var(--size);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-lightGrey);
`;

export default function DotScale() {
  const renderDot = (item: { id: string }) => <Dot key={item.id} />;
  const renderItem = () => {
    return createArray(8, renderDot);
  };
  return <Container>{renderItem()}</Container>;
}
