import { UIItem } from "../../types";
import List3DShapes from "./3DShapes";
import ListAnimals from "./Animals";
import ListButtons from "./Buttons";
import ListCards from "./Cards";
import ListCheckbox from "./Checkbox";
import ListImages from "./Images";
import ListInputs from "./Inputs";
import ListLoaders from "./Loaders";
import ListShapes from "./Shapes";

export const List: UIItem[] = [
  ...ListShapes,
  ...ListAnimals,
  ...List3DShapes,
  ...ListButtons,
  ...ListCheckbox,
  ...ListInputs,
  ...ListLoaders,
  ...ListCards,
  ...ListImages,
];
