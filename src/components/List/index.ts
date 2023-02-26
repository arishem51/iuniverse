import { UIItem } from "../../types";
import ListShapes from "./3DShapes";
import ListAnimals from "./Animals";
import ListButtons from "./Buttons";
import ListCards from "./Cards";
import ListCheckbox from "./Checkbox";
import ListImages from "./Images";
import ListInputs from "./Inputs";
import ListLoaders from "./Loaders";

export const List: UIItem[] = [
  ...ListShapes,
  ...ListAnimals,
  ...ListButtons,
  ...ListCheckbox,
  ...ListInputs,
  ...ListLoaders,
  ...ListCards,
  ...ListImages,
];
