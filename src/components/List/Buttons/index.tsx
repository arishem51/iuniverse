import { createComponentList } from "@helper";
import { BoxHoverButton } from "./BoxHoverButton";
import { ExpandButton } from "./ExpandButton";
import { ExpandUp3DButton } from "./ExpandUp3DButton";
import { Hover3DButton } from "./Hover3DButton";
import { KeyboardButton } from "./KeyboardButton";
import { LineUpButton } from "./LineUpButton";
import { ShadowButton } from "./ShadowButton";
import HoverButton from "./HoverButton";
import HoverButton2 from "./HoverButton-2";
import HoverBallButton from "./HoverBallButton";

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
  {
    component: <HoverButton />,
  },
  {
    component: <HoverButton2 />,
  },
  {
    component: <HoverBallButton />,
  },
];

export default createComponentList(List, "button");
