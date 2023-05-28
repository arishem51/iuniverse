import { UIItem } from "../../../types";
import { Carousel } from "./Carousel";
import { Cone } from "./Cone";
import { Cube } from "./Cube";

const List: UIItem[] = [
  {
    component: <Carousel />,
    type: "3dShape",
  },
  {
    component: <Cone />,
    type: "3dShape",
  },
  {
    component: <Cube />,
    type: "3dShape",
  },
];

export default List;
