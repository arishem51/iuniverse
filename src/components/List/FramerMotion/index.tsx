import { UIItem } from "../../../types";
import FrameRevealTwo from "./FrameRevealTwo";
import FrameRevealThree from "./FrameRevealThree";

import FrameReveal from "./FrameReveal";
import SwitchButton from "./SwitchButton";
import TextAnimate from "./TextAnimate";
import BorderAnimation from "./BorderAnimation";
import Gesture from "./Gestures";

const List: UIItem[] = [
  {
    component: <SwitchButton />,
    type: "framer",
  },
  // FIXME: Please fix this component
  // {
  //   component: <TextAnimate />,
  //   type: "framer",
  // },
  {
    component: <FrameReveal />,
    type: "framer",
  },
  {
    component: <FrameRevealTwo />,
    type: "framer",
  },

  {
    component: <FrameRevealThree />,
    type: "framer",
  },
  {
    component: <BorderAnimation />,
    type: "framer",
  },
  {
    component: <Gesture />,
    type: "framer",
  },
];

export default List;
