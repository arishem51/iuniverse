import FrameRevealTwo from "./FrameRevealTwo";
import FrameRevealThree from "./FrameRevealThree";

import FrameReveal from "./FrameReveal";
import SwitchButton from "./SwitchButton";
import TextAnimate from "./TextAnimate";
import BorderAnimation from "./BorderAnimation";
import Gesture from "./Gestures";
import { createComponentList } from "@helper";

const List = [
  {
    component: <SwitchButton />,
  },
  // FIXME: Please fix this component
  // {
  //   component: <TextAnimate />,
  //
  // },
  {
    component: <FrameReveal />,
  },
  {
    component: <FrameRevealTwo />,
  },

  {
    component: <FrameRevealThree />,
  },
  {
    component: <BorderAnimation />,
  },
  {
    component: <Gesture />,
  },
];

export default createComponentList(List, "framer");
