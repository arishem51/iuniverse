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

export function addSuffix(type: Type) {
  if (
    //Last word
    type[type.length - 1] === PLURAL_RULE.word.s ||
    type[type.length - 1] === PLURAL_RULE.word.z ||
    type[type.length - 1] === PLURAL_RULE.word.x ||
    // Last 2 words
    type.slice(2) === PLURAL_RULE.words.ch ||
    type.slice(2) === PLURAL_RULE.words.sh ||
    type.slice(2) === PLURAL_RULE.words.ss
  ) {
    return type + "es";
  }
  return type + "s";
}
