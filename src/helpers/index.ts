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

const PLURAL_RULE = {
  word: {
    x: "x",
    s: "s",
    z: "z",
  },
  words: {
    ss: "ss",
    sh: "sh",
    ch: "ch",
  },
};
