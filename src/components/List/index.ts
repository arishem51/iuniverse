import { UIItem } from "../../types";
import ListShapes from "./3DShapes";
import ListAnimals from "./Animals";
import ListButtons from "./Buttons";
import ListCards from "./Cards";
import ListCheckbox from "./Checkbox";

export const List: UIItem[] = [
  ...ListShapes,
  ...ListAnimals,
  ...ListButtons,
  ...ListCards,
  ...ListCheckbox,
];
