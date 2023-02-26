import React from "react";
import { UIItem } from "../../../types";
import { CornerOnlyFrame } from "./CornerOnlyFrame";
import { CornerOnlyFrameTwo } from "./CornerOnlyFrameTwo";
import { FrameReveal } from "./FrameReveal";
import { FrameRevealThree } from "./FrameRevealThree";
import { FrameRevealTwo } from "./FrameRevealTwo";
import { OutlineImage } from "./OutlineImage";

const List: UIItem[] = [
  {
    component: <OutlineImage />,
    type: "image",
  },
  {
    component: <CornerOnlyFrame />,
    type: "image",
  },
  {
    component: <CornerOnlyFrameTwo />,
    type: "image",
  },
  {
    component: <FrameReveal />,
    type: "image",
  },
  {
    component: <FrameRevealTwo />,
    type: "image",
  },
  {
    component: <FrameRevealThree />,
    type: "image",
  },
];

export default List;
