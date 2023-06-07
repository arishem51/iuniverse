import { createComponentList } from "@helper";
import { BouncingBall } from "./BouncingBall";
import { BoxRotate } from "./BoxRotate";
import { Cornerstone } from "./Cornerstone";
import { DotWave } from "./DotWave";
import { Navarog21 } from "./Navarog21";
import { NewtonsCardleDot } from "./NewtonsCardleDot";
import { Rain } from "./Rain";
import { ThreeDotAround } from "./ThreeDotAround";
import Line from "./Line";
import IphoneLoading from "./IphoneLoading";
import DotScale from "./DotScale";

const List = [
  {
    component: <BouncingBall />,
  },
  {
    component: <BoxRotate />,
  },
  {
    component: <Cornerstone />,
  },
  {
    component: <DotWave />,
  },
  {
    component: <Navarog21 />,
  },
  {
    component: <NewtonsCardleDot />,
  },
  {
    component: <Rain />,
  },
  {
    component: <ThreeDotAround />,
  },
  {
    component: <Line />,
  },
  {
    component: <IphoneLoading />,
  },
  {
    component: <DotScale />,
  },
];

export default createComponentList(List, "loader");
