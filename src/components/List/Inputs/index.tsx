import React from "react";
import { UIItem } from "../../../types";
import { Maximinodotpy } from "./Maximinodotpy";
import { JaareetInput } from "./JaareetInput";

const List: UIItem[] = [
  {
    component: <JaareetInput />,
    type: "input",
  },
  {
    component: <Maximinodotpy />,
    type: "input",
  },
];

export default List;
