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
    type: "shapes",
  },
  {
    component: <CurvedTailArrowShape />,
    type: "shapes",
  },
  {
    component: <DiamondNarrowShape />,
    type: "shapes",
  },
  {
    component: <EggShape />,
    type: "shapes",
  },
  {
    component: <HeartShape />,
    type: "shapes",
  },
  {
    component: <HexagonShape />,
    type: "shapes",
  },
  {
    component: <InfinityShape />,
    type: "shapes",
  },
  {
    component: <Moustache />,
    type: "shapes",
  },
  {
    component: <OctagonShape />,
    type: "shapes",
  },
  {
    component: <OvalShape />,
    type: "shapes",
  },
  {
    component: <PacManShape />,
    type: "shapes",
  },
  {
    component: <YinYangShape />,
    type: "shapes",
  },
  {
    component: <TritangleShape.BottomLeft />,
    type: "shapes",
  },
  {
    component: <TritangleShape.BottomRight />,
    type: "shapes",
  },
  {
    component: <TritangleShape.Left />,
    type: "shapes",
  },
  {
    component: <TritangleShape.Right />,
    type: "shapes",
  },
  {
    component: <TritangleShape.TopLeft />,
    type: "shapes",
  },
  {
    component: <TritangleShape.TopRight />,
    type: "shapes",
  },
  {
    component: <PentagonShape />,
    type: "shapes",
  },
  {
    component: <RectangleShape />,
    type: "shapes",
  },
  {
    component: <SquareShape />,
    type: "shapes",
  },
  {
    component: <Star.FivePoints />,
    type: "shapes",
  },
  {
    component: <Star.SixPoints />,
    type: "shapes",
  },
  {
    component: <TrapezoidShape />,
    type: "shapes",
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
