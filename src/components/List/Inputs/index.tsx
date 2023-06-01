import { Maximinodotpy } from "./Maximinodotpy";
import { JaareetInput } from "./JaareetInput";
import { createComponentList } from "@helper";

const List = [
  {
    component: <JaareetInput />,
  },
  {
    component: <Maximinodotpy />,
  },
];

export default createComponentList(List, "input");
