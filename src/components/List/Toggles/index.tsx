import React from "react";
import { UIItem } from "../../../types";
import Switch from "./Swtich";
import ToggleJosh from "./ToggleJosh";

const List: UIItem[] = [
  {
    component: <Switch />,
    type: "toggle",
  },
  {
    component: <ToggleJosh />,
    type: "toggle",
  },
];

export default List;
