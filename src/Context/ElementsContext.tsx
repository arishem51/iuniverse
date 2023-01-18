import { createContext, PropsWithChildren, useContext } from "react";
import BurstShape from "../components/ListComponent/BurstShape";
import CurvedTailArrowShape from "../components/ListComponent/CurvedTailArrowShape";
import DiamondNarrowShape from "../components/ListComponent/DiamondNarrowShape";
import EggShape from "../components/ListComponent/EggShape";
import HeartShape from "../components/ListComponent/HeartShape";
import HexagonShape from "../components/ListComponent/HexagonShape";
import InfinityShape from "../components/ListComponent/InfinityShape";
import Moustache from "../components/ListComponent/Moustache";
import OctagonShape from "../components/ListComponent/OctagonShape";
import OvalShape from "../components/ListComponent/OvalShape";
import PacManShape from "../components/ListComponent/PacManShape";
import PentagonShape from "../components/ListComponent/PentagonShape";
import RectangleShape from "../components/ListComponent/RectangleShape";
import SquareShape from "../components/ListComponent/SquareShape";
import Star from "../components/ListComponent/Star";
import TrapezoidShape from "../components/ListComponent/TrapezoidShape";
import TritangleShape from "../components/ListComponent/TriangleShape";
import YinYangShape from "../components/ListComponent/YinYangShape";
import { UIItem } from "../types";

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
    component: <HexagonShape />,
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
    component: <OctagonShape />,
    type: "shape",
  },
  {
    component: <OvalShape />,
    type: "shape",
  },
  {
    component: <PacManShape />,
    type: "shape",
  },
  {
    component: <YinYangShape />,
    type: "shape",
  },
  {
    component: <TritangleShape.BottomLeft />,
    type: "shape",
  },
  {
    component: <TritangleShape.BottomRight />,
    type: "shape",
  },
  {
    component: <TritangleShape.Left />,
    type: "shape",
  },
  {
    component: <TritangleShape.Right />,
    type: "shape",
  },
  {
    component: <TritangleShape.TopLeft />,
    type: "shape",
  },
  {
    component: <TritangleShape.TopRight />,
    type: "shape",
  },
  {
    component: <PentagonShape />,
    type: "shape",
  },
  {
    component: <RectangleShape />,
    type: "shape",
  },
  {
    component: <SquareShape />,
    type: "shape",
  },
  {
    component: <Star.FivePoints />,
    type: "shape",
  },
  {
    component: <Star.SixPoints />,
    type: "shape",
  },
  {
    component: <TrapezoidShape />,
    type: "shape",
  },
];

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  return (
    <Context.Provider value={{ elements: List }}>{children}</Context.Provider>
  );
}

export function useElements() {
  const value = useContext(Context);
  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }
  return value;
}
