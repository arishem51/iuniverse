import { createComponentList } from "@helper";
import FirstSVG from "./FirstSVG";
import CheckBoxSVG from "./CheckboxSVG";

const List = [
  {
    component: <FirstSVG />,
  },
  {
    component: <CheckBoxSVG />,
  },
];

export default createComponentList(List, "svg");
