import React from "react";
import { UIItem } from "../../../types";
import { BorderRunningCard } from "./BorderRunningCard";
import { Card3DHoverEffect } from "./Card3DHoverEffect";
import { CardShadowHover } from "./CardShadowHover";
import { FlipCard } from "./FlipCard";

const List: UIItem[] = [
  {
    component: <BorderRunningCard />,
    type: "card",
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
    component: <CardShadowHover />,
    type: "card",
  },
  {
    component: <FlipCard />,
    type: "card",
  },
];

export default List;
