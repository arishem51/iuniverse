import CountUp from "./CountUp";
import Glitch from "./Glitch";
import GradientText from "./GradientText";
import TextHover from "./TextHover";
import TextHoverThree from "./TextHoverThree";
import TextHoverTwo from "./TextHoverTwo";
import Breathe from "./Breathe";
import { createComponentList } from "@helper";

const List = [
  {
    component: <Glitch />,
  },
  {
    component: <GradientText />,
  },
  {
    component: <TextHover />,
  },
  {
    component: <TextHoverThree />,
  },
  {
    component: <TextHoverTwo />,
  },
  {
    component: <CountUp />,
  },
  {
    component: <Breathe>Text Animation</Breathe>,
  },
];

export default createComponentList(List, "text");
