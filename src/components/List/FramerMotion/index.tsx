import { UIItem } from "../../../types";
import FrameRevealTwo from "./FrameRevealTwo";
import FrameRevealThree from "./FrameRevealThree";

import FrameReveal from "./FrameReveal";
import SwitchButton from "./SwitchButton";
import TextAnimate from "./TextAnimate";
import BorderAnimation from "./BorderAnimation";

const List: UIItem[] = [
  {
    component: <SwitchButton />,
    type: "framer",
  },
  {
    component: <TextAnimate />,
    type: "framer",
  },
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
];

export default List;
