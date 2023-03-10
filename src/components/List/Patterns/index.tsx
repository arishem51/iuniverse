import React from "react";
import { UIItem } from "../../../types";
import Background3D from "./Background3D";
import PostageStampPattern from "./PostageStampPattern";
import Radial from "./Radial";
import RadialFive from "./RadialFive";
import RadialFour from "./RadialFour";
import RadialSeven from "./RadialSeven";
import RadialSix from "./RadialSix";
import RadialThree from "./RadialThree";
import RadialTwo from "./RadialTwo";
import Tritangular from "./Tritangular";
import TritangularGrey from "./TritangularGrey";
import ZigZac from "./ZigZac";

const List: UIItem[] = [
  {
    component: <Background3D />,
    type: "pattern",
  },
  {
    component: <Radial />,
    type: "pattern",
  },
  {
    component: <RadialFour />,
    type: "pattern",
  },
  {
    component: <RadialThree />,
    type: "pattern",
  },
  {
    component: <RadialTwo />,
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
    component: <ZigZac />,
    type: "pattern",
  },
  {
    component: <RadialFive />,
    type: "pattern",
  },
  {
    component: <RadialSix />,
    type: "pattern",
  },
  {
    component: <RadialSeven />,
    type: "pattern",
  },
  {
    component: <PostageStampPattern />,
    type: "pattern",
  },
];

export default List;
