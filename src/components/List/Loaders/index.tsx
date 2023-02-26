import { UIItem } from "../../../types";
import React from "react";
import { BouncingBall } from "./BouncingBall";
import { BoxRotate } from "./BoxRotate";
import { Cornerstone } from "./Cornerstone";
import { DotWave } from "./DotWave";
import { Navarog21 } from "./Navarog21";
import { NewtonsCardleDot } from "./NewtonsCardleDot";
import { Rain } from "./Rain";
import { ThreeDotAround } from "./ThreeDotAround";

const List: UIItem[] = [
  {
    component: <BouncingBall />,
    type: "loader",
  },
  {
    component: <BoxRotate />,
    type: "loader",
  },
  {
    component: <Cornerstone />,
    type: "loader",
  },
  {
    component: <DotWave />,
    type: "loader",
  },
  {
    component: <Navarog21 />,
    type: "loader",
  },
  {
    component: <NewtonsCardleDot />,
    type: "loader",
  },
  {
    component: <Rain />,
    type: "loader",
  },
  {
    component: <ThreeDotAround />,
    type: "loader",
  },
];

export default List;
