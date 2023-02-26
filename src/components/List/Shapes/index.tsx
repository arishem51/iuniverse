import React from "react";
import { UIItem } from "../../../types";
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
import TriangleShape from "./TriangleShape";
import YinYangShape from "./YinYangShape";

const List: UIItem[] = [
  {
    component: <BurstShape />,
    type: "shape",
  },
  {
    component: <CurvedTailArrowShape />,
    type: "shape",
  },
  {
    component: <DiamondNarrowShape />,
    type: "shape",
  },
  {
    component: <EggShape />,
    type: "shape",
  },
  {
    component: <HeartShape />,
    type: "shape",
  },
  {
    component: <InfinityShape />,
    type: "shape",
  },
  {
    component: <Moustache />,
    type: "shape",
  },
  {
    component: <PacManShape />,
    type: "shape",
  },
  {
    component: <OvalShape />,
    type: "shape",
  },
  {
    component: <OctagonShape />,
    type: "shape",
  },
  {
    component: <HexagonShape />,
    type: "shape",
  },
  { component: <ParallelogramShape />, type: "shape" },
  { component: <PentagonShape />, type: "shape" },
  { component: <RectangleShape />, type: "shape" },
  { component: <SquareShape />, type: "shape" },
  { component: <Star.FivePoints />, type: "shape" },
  { component: <Star.SixPoints />, type: "shape" },
  { component: <TrapezoidShape />, type: "shape" },
  { component: <TriangleShape.BottomLeft />, type: "shape" },
  { component: <TriangleShape.BottomRight />, type: "shape" },
  { component: <TriangleShape.TopLeft />, type: "shape" },
  { component: <TriangleShape.TopRight />, type: "shape" },
  { component: <TriangleShape.Left />, type: "shape" },
  { component: <TriangleShape.Down />, type: "shape" },
  { component: <TriangleShape.Right />, type: "shape" },
  { component: <TriangleShape.Up />, type: "shape" },
  { component: <YinYangShape />, type: "shape" },
];

export default List;
