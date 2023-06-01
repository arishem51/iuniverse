import { createComponentList } from "@helper";
import { BorderRunningCard } from "./BorderRunningCard";
import { Card3DHoverEffect } from "./Card3DHoverEffect";
import { CardShadowHover } from "./CardShadowHover";
import { FlipCard } from "./FlipCard";
import HolyGrailCard from "./HolyGrailCard";

const List = [
  {
    component: <FlipCard />,
  },
  {
    component: <Card3DHoverEffect />,
  },
  {
    component: <BorderRunningCard />,
  },

  {
    component: (
      <Card3DHoverEffect
        backgroungImg="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
        visibleImg="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        textImg="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
      />
    ),
  },
  {
    component: <CardShadowHover />,
  },

  {
    component: <HolyGrailCard />,
  },
];

export default createComponentList(List, "card");
