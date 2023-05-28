import { createContext, PropsWithChildren, useContext } from "react";
import { List } from "../components/List";
import { sortShapeElements } from "../helper";
import { RouteItem, UIItem } from "../types";

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  const elements = sortShapeElements(List);
  return <Context.Provider value={{ elements }}>{children}</Context.Provider>;
}

type ElementType = {
  type: RouteItem["urlPath"];
};

export function useElements(props?: ElementType) {
  const value = useContext(Context);

  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }

  const newValue = {
    elements: value.elements,
    previewElements: props?.type
      ? value.elements.filter((item) => item.type === props.type).slice(0, 4)
      : [],
  };

  return newValue;
}
