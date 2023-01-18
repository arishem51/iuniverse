import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useElements } from "../../Context/ElementsContext";
import { UIItem } from "../../types";
import BurstShape from "./BurstShape";
import CurvedTailArrowShape from "./CurvedTailArrowShape";
import DiamondNarrowShape from "./DiamondNarrowShape";
import EggShape from "./EggShape";
import HeartShape from "./HeartShape";
import HexagonShape from "./HexagonShape";
import InfinityShape from "./InfinityShape";
import Moustache from "./Moustache";
import OctagonShape from "./OctagonShape";
import OvalShape from "./OvalShape";
import PacManShape from "./PacManShape";
import ParallelogramShape from "./ParallelogramShape";
import PentagonShape from "./PentagonShape";
import RectangleShape from "./RectangleShape";
import SquareShape from "./SquareShape";
import Star from "./Star";
import TrapezoidShape from "./TrapezoidShape";
import TritangleShape from "./TriangleShape";
import YinYangShape from "./YinYangShape";

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-dark);
`;

const Text = styled.h1`
  margin-bottom: 3rem;
  color: var(--color-white);
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: var(--color-lightDark);
  border-radius: 1rem;
`;

export default function ListComponent() {
  const { id } = useParams();
  const { elements: list } = useElements();

  const elements =
    id === "all" ? list : list.filter((item) => item.type === id);

  function renderItem() {
    return elements.map((item, index) => (
      <ListItem key={`${item.type} - ${index + 1}`}>{item.component}</ListItem>
    ));
  }

  return (
    <Wrapper>
      <Text>{elements.length} components</Text>
      <ListWrapper>{renderItem()}</ListWrapper>
    </Wrapper>
  );
}
