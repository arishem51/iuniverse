import React from "react";
import { UIItem } from "../../../types";
import Glitch from "./Glitch";
import GradientText from "./GradientText";
import TextHover from "./TextHover";
import TextHoverThree from "./TextHoverThree";
import TextHoverTwo from "./TextHoverTwo";

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
];

export default List;
