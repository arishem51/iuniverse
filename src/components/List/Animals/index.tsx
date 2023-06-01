import { createComponentList } from "@helper";
import { Hamster } from "./Hamster";

const List = [
  {
    component: <Hamster />,
  },
];

export default createComponentList(List, "animal");
