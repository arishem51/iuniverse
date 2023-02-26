import React, { createContext, PropsWithChildren, useContext } from "react";
import Hamster from "../components/List/Animals/Hamster";
import ExpandButton from "../components/List/Buttons/ExpandButton";
import KeyboardButton from "../components/List/Buttons/KeyboardButton";
import ShadowButton from "../components/List/Buttons/ShadowButton";
import Card3DHoverEffect from "../components/List/Cards/Card3DHoverEffect";
import CardShadowHover from "../components/List/Cards/CardShadowHover";
import DotWave from "../components/List/Loaders/DotWave";
import ThreeDotAround from "../components/List/Loaders/ThreeDotAround";
import BurstShape from "../components/List/Shapes/BurstShape";
import Cube from "../components/List/3DShapes/Cube";
import CurvedTailArrowShape from "../components/List/Shapes/CurvedTailArrowShape";
import DiamondNarrowShape from "../components/List/Shapes/DiamondNarrowShape";
import EggShape from "../components/List/Shapes/EggShape";
import HeartShape from "../components/List/Shapes/HeartShape";
import HexagonShape from "../components/List/Shapes/HexagonShape";
import InfinityShape from "../components/List/Shapes/InfinityShape";
import Moustache from "../components/List/Shapes/Moustache";
import OctagonShape from "../components/List/Shapes/OctagonShape";
import OvalShape from "../components/List/Shapes/OvalShape";
import PacManShape from "../components/List/Shapes/PacManShape";
import PentagonShape from "../components/List/Shapes/PentagonShape";
import RectangleShape from "../components/List/Shapes/RectangleShape";
import SquareShape from "../components/List/Shapes/SquareShape";
import Star from "../components/List/Shapes/Star";
import TrapezoidShape from "../components/List/Shapes/TrapezoidShape";
import TritangleShape from "../components/List/Shapes/TriangleShape";
import YinYangShape from "../components/List/Shapes/YinYangShape";
import { UIItem } from "../types";
import FlipCard from "../components/List/Cards/FlipCard";
import ExpandUp3DButton from "../components/List/Buttons/ExpandUp3DButtont";
import LineUpButton from "../components/List/Buttons/LineUpButton";
import NewtonsCardleDot from "../components/List/Loaders/NewtonsCardleDot";
import BouncingCircle from "../components/List/Loaders/BouncingBall";
import Rain from "../components/List/Loaders/Rain";
import BoxHoverButton from "../components/List/Buttons/BoxHoverButton";
import BoxRotate from "../components/List/Loaders/BoxRotate";
import Glitch from "../components/List/Text/Glitch";
import { sortShapeElements } from "../helpers";
import Hover3DButton from "../components/List/Buttons/Hover3DButton";
import Navarog21 from "../components/List/Loaders/Navarog21";
import Switch from "../components/List/Toggle/Swtich";
import Cone from "../components/List/3DShapes/Cone";
import Maximinodotpy from "../components/List/Inputs/Maximinodotpy";
import Burger from "../components/List/Checkbox/Burger";
import Cornerstone from "../components/List/Loaders/Cornerstone";
import Carousel from "../components/List/3DShapes/Carousel";
import GradientText from "../components/List/Text/GradientText";
import JaareetInput from "../components/List/Inputs/JaareetInput";
import BorderRunningCard from "../components/List/Cards/BorderRunningCard";
import OutlineImage from "../components/List/Image/OutlineImage";
import CornerOnlyFrame from "../components/List/Image/CornerOnlyFrame";
import CornerOnlyFrameTwo from "../components/List/Image/CornerOnlyFrameTwo";
import ChessBoard from "../components/List/Patterns/ChessBoard";
import ZigZac from "../components/List/Patterns/ZigZac";
import Tritangular from "../components/List/Patterns/Tritangular";
import TritangularGrey from "../components/List/Patterns/TritangularGrey";
import TextHover from "../components/List/Text/TextHover";
import TextHoverTwo from "../components/List/Text/TextHoverTwo";
import TextHoverThree from "../components/List/Text/TextHoverThree";
import Background3D from "../components/List/Patterns/Background3D";
import FrameReveal from "../components/List/Image/FrameReveal";
import FrameRevealTwo from "../components/List/Image/FrameRevealTwo";
import FrameRevealThree from "../components/List/Image/FrameRevealThree";
import Radial from "../components/List/Patterns/Radial";
import RadialTwo from "../components/List/Patterns/RadialTwo";
import RadialThree from "../components/List/Patterns/RadialThree";
import RadialFour from "../components/List/Patterns/RadialFour";

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
    component: <ShadowButton />,
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
    component: <KeyboardButton />,
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
  {
    component: <ExpandButton />,
    type: "button",
  },
  {
    component: <Cube />,
    type: "3dShape",
  },
  {
    component: <FlipCard />,
    type: "card",
  },
  {
    component: <ExpandUp3DButton />,
    type: "button",
  },
  {
    component: <LineUpButton />,
    type: "button",
  },
  {
    component: <NewtonsCardleDot />,
    type: "loader",
  },
  {
    component: <BouncingCircle />,
    type: "loader",
  },
  {
    component: <Rain />,
    type: "loader",
  },
  {
    component: <BoxHoverButton />,
    type: "button",
  },
  {
    component: <BoxRotate />,
    type: "loader",
  },
  {
    component: <Glitch />,
    type: "text",
  },
  {
    component: <Hover3DButton />,
    type: "button",
  },
  {
    component: <Navarog21 />,
    type: "loader",
  },
  {
    component: <Switch />,
    type: "toogle",
  },
  {
    component: <Cone />,
    type: "3dShape",
  },
  {
    component: <Maximinodotpy />,
    type: "input",
  },
  {
    component: <Burger />,
    type: "checkbox",
  },
  {
    component: <Cornerstone />,
    type: "loader",
  },
  {
    component: <Carousel />,
    type: "3dShape",
  },
  {
    component: <GradientText />,
    type: "text",
  },
  {
    component: <JaareetInput />,
    type: "input",
  },
  {
    component: <BorderRunningCard />,
    type: "card",
  },
  {
    component: <OutlineImage />,
    type: "image",
  },
  {
    component: <CornerOnlyFrame />,
    type: "image",
  },
  {
    component: <CornerOnlyFrameTwo />,
    type: "image",
  },
  {
    component: <ChessBoard />,
    type: "pattern",
  },
  {
    component: <ZigZac />,
    type: "pattern",
  },
  {
    component: <Tritangular />,
    type: "pattern",
  },
  {
    component: <TritangularGrey />,
    type: "pattern",
  },
  {
    component: <TextHover />,
    type: "text",
  },
  {
    component: <TextHoverTwo />,
    type: "text",
  },
  {
    component: <TextHoverThree />,
    type: "text",
  },
  {
    component: <Background3D />,
    type: "pattern",
  },
  {
    component: <FrameReveal />,
    type: "image",
  },
  {
    component: <FrameRevealTwo />,
    type: "image",
  },
  {
    component: <FrameRevealThree />,
    type: "image",
  },
  {
    component: <Radial />,
    type: "pattern",
  },
  {
    component: <RadialTwo />,
    type: "pattern",
  },
  {
    component: <RadialThree />,
    type: "pattern",
  },
  {
    component: <RadialFour />,
    type: "pattern",
  },
];

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  const elements = sortShapeElements(List);
  return <Context.Provider value={{ elements }}>{children}</Context.Provider>;
}

export function useElements() {
  const value = useContext(Context);
  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }
  return value;
}
