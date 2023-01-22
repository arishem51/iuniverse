import { Type, UIItem } from "../types";

export function sortShapeElements(elements: UIItem[]) {
  const newArr = [...elements];
  return newArr.sort((a, b) => {
    if (a.type === "shape" && b.type !== "shape") {
      return 1;
    }
    return -1;
  });
}

export function sortEmptyElement(listTypes: Type[], typesEmpty: Type[]) {
  const newListTypes = [...listTypes];
  return newListTypes.sort((a, b) => {
    if (b === "all") {
      return 1;
    }
    for (let i = 0; i < typesEmpty.length; i++) {
      if (a === typesEmpty[i] && b !== typesEmpty[i]) {
        return 1;
      }
    }
    return -1;
  });
}
