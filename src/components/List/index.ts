import { UIItem } from "@types";
import List3DShapes from "./3DShapes";
import ListAnimals from "./Animals";
import ListButtons from "./Buttons";
import ListCards from "./Cards";
import ListCheckbox from "./Checkbox";
import ListImages from "./Images";
import ListInputs from "./Inputs";
import ListLoaders from "./Loaders";
import ListShapes from "./Shapes";
import ListTexts from "./Texts";
import ListToggles from "./Toggles";
import ListPatterns from "./Patterns";
import ListSliders from "./Slider";
import ListFramerMotion from "./FramerMotion";
import ListSVG from "./SVGComponent";

export const List: UIItem[] = [
  ...ListShapes,
  ...ListAnimals,
  ...List3DShapes,
  ...ListButtons,
  ...ListCheckbox,
  ...ListInputs,
  ...ListToggles,
  ...ListLoaders,
  ...ListCards,
  ...ListTexts,
  ...ListPatterns,
  ...ListImages,
  ...ListSliders,
  ...ListFramerMotion,
  ...ListSVG,
];
