import { UIItem } from "../../../types";
import FrameReveal from "./FrameReveal";
import SwitchButton from "./SwitchButton";
import TextAnimate from "./TextAnimate";

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
];

export default List;
