import { createContext, PropsWithChildren, useContext } from "react";
import Hamster from "../components/ListComponent/Animals/Hamster";
import KeyboardButton from "../components/ListComponent/Buttons/KeyboardButton";
import ShadowButton from "../components/ListComponent/Buttons/ShadowButton";
import Card3DHoverEffect from "../components/ListComponent/Cards/Card3DHoverEffect";
import CardShadowHover from "../components/ListComponent/Cards/CardShadowHover";
import DotWave from "../components/ListComponent/Loaders/DotWave";
import ThreeDotAround from "../components/ListComponent/Loaders/ThreeDotAround";
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
  {
    component: <ShadowButton children="uiverse" />,
    type: "button",
  },
  {
    component: <DotWave />,
    type: "loader",
  },
  {
    component: <CardShadowHover />,
    type: "card",
  },
  {
    component: <ThreeDotAround />,
    type: "loader",
  },
  {
    component: <KeyboardButton children="Click me" />,
    type: "button",
  },
  {
    component: <Hamster />,
    type: "animal",
  },
  {
    component: <Card3DHoverEffect />,
    type: "card",
  },
  {
    component: (
      <Card3DHoverEffect
        backgroungImg="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
        visibleImg="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        textImg="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
      />
    ),
    type: "card",
  },
];

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  const elements = [
    ...List.filter((item) => item.type !== "shape"),
    ...List.filter((item) => item.type === "shape"),
  ];
  return <Context.Provider value={{ elements }}>{children}</Context.Provider>;
}

export function useElements() {
  const value = useContext(Context);
  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }
  return value;
}
