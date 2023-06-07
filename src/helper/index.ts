import { RouteItem, UIItem } from "@types";
import { randomId } from "@utils";

export function sortShapeElements(elements: UIItem[]) {
  const newArr = [...elements];
  return newArr.sort((a, b) => {
    if (a.type === "shape" && b.type !== "shape") {
      return 1;
    }
    return -1;
  });
}

const Items: RouteItem["urlPath"][] = [
  "3dShape",
  "all",
  "animal",
  "button",
  "card",
  "checkbox",
  "input",
  "loader",
  "shape",
  "text",
  "toggle",
];

export function checkRouteId(id: string | undefined = "", func: () => void) {
  let flag = false;
  for (let i = 0; i < Items.length; i++) {
    if (Items[i] === id) {
      flag = true;
    }
  }
  if (!flag) {
    func();
  }
}

export function getTanFromDegrees(degrees: number) {
  return Math.tan((degrees * Math.PI) / 180);
}

export function createComponentList(
  list: { component: React.ReactElement }[],
  type: UIItem["type"]
): UIItem[] {
  return list.map((item) => ({ component: item.component, type }));
}

type ArrayItem = {
  id: string;
};

function createMapId(): ArrayItem {
  return {
    id: randomId(),
  };
}

export function createArray(num: number) {
  return new Array(num).fill("_").map(createMapId);
}

export function renderArray(
  num: number,
  renderItem: (item: ArrayItem, index: number) => JSX.Element
) {
  return createArray(num).map(renderItem);
}
