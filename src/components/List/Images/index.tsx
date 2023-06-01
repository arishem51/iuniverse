import { createComponentList } from "@helper";
import { CornerOnlyFrame } from "./CornerOnlyFrame";
import { CornerOnlyFrameTwo } from "./CornerOnlyFrameTwo";
import { FrameReveal } from "./FrameReveal";
import { FrameRevealThree } from "./FrameRevealThree";
import { FrameRevealTwo } from "./FrameRevealTwo";
import { OutlineImage } from "./OutlineImage";
import PostageStamp from "./PostageStamp";
import TheRoundedFrame from "./TheRoundedFrame";

const List = [
  {
    component: <OutlineImage />,
  },
  {
    component: <CornerOnlyFrame />,
  },
  {
    component: <CornerOnlyFrameTwo />,
  },
  {
    component: <FrameReveal />,
  },
  {
    component: <FrameRevealTwo />,
  },
  {
    component: <FrameRevealThree />,
  },
  {
    component: <PostageStamp />,
  },
  {
    component: <TheRoundedFrame />,
  },
];

export default createComponentList(List, "image");
