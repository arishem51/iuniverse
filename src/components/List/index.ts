import { UIItem } from "../../types";
import ListShapes from "./3DShapes";
import ListAnimals from "./Animals";
import ListButtons from "./Buttons";

export const List: UIItem[] = [...ListShapes, ...ListAnimals, ...ListButtons];
