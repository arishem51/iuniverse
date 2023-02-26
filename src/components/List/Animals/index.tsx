import React from "react";
import { UIItem } from "../../../types";
import { Hamster } from "./Hamster";

const List: UIItem[] = [
  {
    component: <Hamster />,
    type: "animal",
  },
];

export default List;
