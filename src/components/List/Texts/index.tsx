import React from "react";
import { UIItem } from "../../../types";
import CountUp from "./CountUp";
import Glitch from "./Glitch";
import GradientText from "./GradientText";
import TextHover from "./TextHover";
import TextHoverThree from "./TextHoverThree";
import TextHoverTwo from "./TextHoverTwo";
import Breathe from "./Breathe";

const List: UIItem[] = [
  {
    component: <Glitch />,
    type: "text",
  },
  {
    component: <GradientText />,
    type: "text",
  },
  {
    component: <TextHover />,
    type: "text",
  },
  {
    component: <TextHoverThree />,
    type: "text",
  },
  {
    component: <TextHoverTwo />,
    type: "text",
  },
  {
    component: <CountUp />,
    type: "text",
  },
  {
    component: <Breathe>Text Animation</Breathe>,
    type: "text",
  },
];

export default List;
