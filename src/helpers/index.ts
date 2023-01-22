import { UIItem } from "../types";

export function sortShapeElements(elements: UIItem[]) {
  const newArr = [...elements];
  return newArr.sort((a, b) => {
    if (a.type === "shape" && b.type !== "shape") {
      return 1;
    }
    return -1;
  });
}
