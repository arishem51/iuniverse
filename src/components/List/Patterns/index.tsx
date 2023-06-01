import { createComponentList } from "@helper";
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

const List = [
  {
    component: <Background3D />,
  },
  {
    component: <Radial />,
  },
  {
    component: <RadialFour />,
  },
  {
    component: <RadialThree />,
  },
  {
    component: <RadialTwo />,
  },
  {
    component: <Tritangular />,
  },
  {
    component: <TritangularGrey />,
  },
  {
    component: <ZigZac />,
  },
  {
    component: <RadialFive />,
  },
  {
    component: <RadialSix />,
  },
  {
    component: <RadialSeven />,
  },
  {
    component: <PostageStampPattern />,
  },
];

export default createComponentList(List, "pattern");
