import { UIItem } from "../../../types";
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
];

export default List;
