import { createContext, PropsWithChildren, useContext } from "react";
import BurstShape from "../components/ListComponent/Shapes/BurstShape";
import CurvedTailArrowShape from "../components/ListComponent/Shapes/CurvedTailArrowShape";
import DiamondNarrowShape from "../components/ListComponent/Shapes/DiamondNarrowShape";
import EggShape from "../components/ListComponent/Shapes/EggShape";
import HeartShape from "../components/ListComponent/Shapes/HeartShape";
import HexagonShape from "../components/ListComponent/Shapes/HexagonShape";
import InfinityShape from "../components/ListComponent/Shapes/InfinityShape";
import Moustache from "../components/ListComponent/Shapes/Moustache";
import OctagonShape from "../components/ListComponent/Shapes/OctagonShape";
import OvalShape from "../components/ListComponent/Shapes/OvalShape";
import PacManShape from "../components/ListComponent/Shapes/PacManShape";
import PentagonShape from "../components/ListComponent/Shapes/PentagonShape";
import RectangleShape from "../components/ListComponent/Shapes/RectangleShape";
import SquareShape from "../components/ListComponent/Shapes/SquareShape";
import Star from "../components/ListComponent/Shapes/Star";
import TrapezoidShape from "../components/ListComponent/Shapes/TrapezoidShape";
import TritangleShape from "../components/ListComponent/Shapes/TriangleShape";
import YinYangShape from "../components/ListComponent/Shapes/YinYangShape";
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
