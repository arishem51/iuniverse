import React from "react";
import { UIItem } from "../../../types";
import { Burger } from "./Burger";

const List: UIItem[] = [
  {
    component: <Burger />,
    type: "checkbox",
  },
];

export default List;
