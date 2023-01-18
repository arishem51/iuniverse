import { useParams } from "react-router-dom";
import styled from "styled-components";
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

const List = [
  <BurstShape />,
  <CurvedTailArrowShape />,
  <DiamondNarrowShape />,
  <EggShape />,
  <HeartShape />,
  <HexagonShape />,
  <InfinityShape />,
  <Moustache />,
  <OctagonShape />,
  <OvalShape />,
  <PacManShape />,
  <YinYangShape />,
  <TritangleShape.BottomLeft />,
  <TritangleShape.BottomRight />,
  <TritangleShape.Left />,
  <TritangleShape.Right />,
  <TritangleShape.TopLeft />,
  <TritangleShape.TopRight />,
  <PentagonShape />,
  <RectangleShape />,
  <SquareShape />,
  <Star.FivePoints />,
  <Star.SixPoints />,
  <TrapezoidShape />,
];

export default function ListComponent() {
  const { id } = useParams();

  function renderItem() {
    return List.map((item, index) => <ListItem key={index}>{item}</ListItem>);
  }

  return (
    <Wrapper>
      <Text>{List.length} components</Text>
      <ListWrapper>{renderItem()}</ListWrapper>
    </Wrapper>
  );
}
