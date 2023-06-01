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
import { createComponentList } from "@helper";
import Spiral from "./Spiral";

const List = [
  {
    component: <BurstShape />,
  },
  {
    component: <CurvedTailArrowShape />,
  },
  {
    component: <DiamondNarrowShape />,
  },
  {
    component: <EggShape />,
  },
  {
    component: <HeartShape />,
  },
  {
    component: <InfinityShape />,
  },
  {
    component: <Moustache />,
  },
  {
    component: <PacManShape />,
  },
  {
    component: <OvalShape />,
  },
  {
    component: <OctagonShape />,
  },
  {
    component: <HexagonShape />,
  },
  { component: <ParallelogramShape /> },
  { component: <PentagonShape /> },
  { component: <RectangleShape /> },
  { component: <SquareShape /> },
  { component: <Star.FivePoints /> },
  { component: <Star.SixPoints /> },
  { component: <TrapezoidShape /> },
  { component: <TriangleShape.BottomLeft /> },
  { component: <TriangleShape.BottomRight /> },
  { component: <TriangleShape.TopLeft /> },
  { component: <TriangleShape.TopRight /> },
  { component: <TriangleShape.Left /> },
  { component: <TriangleShape.Down /> },
  { component: <TriangleShape.Right /> },
  { component: <TriangleShape.Up /> },
  { component: <YinYangShape /> },
  { component: <Spiral /> },
];

export default createComponentList(List, "shape");
