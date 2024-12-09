import { createComponentList } from "@helper";
import FirstSVG from "./FirstSVG";
import CheckBoxSVG from "./CheckboxSVG";
import Bomb from "./Bomb";

const List = [
  {
    component: <FirstSVG />,
  },
  {
    component: <CheckBoxSVG />,
  },
  {
    component: <Bomb />,
  },
];

export default createComponentList(List, "svg");
