import { createComponentList } from "@helper";
import { Carousel } from "./Carousel";
import { Cone } from "./Cone";
import { Cube } from "./Cube";

const List = [
  {
    component: <Carousel />,
  },
  {
    component: <Cone />,
  },
  {
    component: <Cube />,
  },
];

export default createComponentList(List, "3dShape");
