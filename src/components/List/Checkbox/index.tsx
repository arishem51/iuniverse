import { Burger } from "./Burger";
import { createComponentList } from "@helper";

const List = [
  {
    component: <Burger />,
  },
];

export default createComponentList(List, "checkbox");
