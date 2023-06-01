import { createComponentList } from "@helper";
import Switch from "./Swtich";
import ToggleJosh from "./ToggleJosh";

const List = [
  {
    component: <Switch />,
  },
  {
    component: <ToggleJosh />,
  },
];

export default createComponentList(List, "toggle");
