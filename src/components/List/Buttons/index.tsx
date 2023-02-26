import React from "react";
import { UIItem } from "../../../types";
import { BoxHoverButton } from "./BoxHoverButton";
import { ExpandButton } from "./ExpandButton";
import { ExpandUp3DButton } from "./ExpandUp3DButton";
import { Hover3DButton } from "./Hover3DButton";
import { KeyboardButton } from "./KeyboardButton";
import { LineUpButton } from "./LineUpButton";
import { ShadowButton } from "./ShadowButton";

const List: UIItem[] = [
  {
    component: <BoxHoverButton />,
    type: "button",
  },
  {
    component: <ExpandButton />,
    type: "button",
  },
  {
    component: <ExpandUp3DButton />,
    type: "button",
  },
  {
    component: <Hover3DButton />,
    type: "button",
  },
  {
    component: <KeyboardButton />,
    type: "button",
  },
  {
    component: <LineUpButton />,
    type: "button",
  },
  {
    component: <ShadowButton />,
    type: "button",
  },
];

export default List;
