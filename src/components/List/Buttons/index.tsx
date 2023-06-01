import { createComponentList } from "@helper";
import { BoxHoverButton } from "./BoxHoverButton";
import { ExpandButton } from "./ExpandButton";
import { ExpandUp3DButton } from "./ExpandUp3DButton";
import { Hover3DButton } from "./Hover3DButton";
import { KeyboardButton } from "./KeyboardButton";
import { LineUpButton } from "./LineUpButton";
import { ShadowButton } from "./ShadowButton";

const List = [
  {
    component: <BoxHoverButton />,
  },
  {
    component: <ExpandButton />,
  },
  {
    component: <ExpandUp3DButton />,
  },
  {
    component: <Hover3DButton />,
  },
  {
    component: <KeyboardButton />,
  },
  {
    component: <LineUpButton />,
  },
  {
    component: <ShadowButton />,
  },
];

export default createComponentList(List, "button");
