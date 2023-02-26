import React, { createContext, PropsWithChildren, useContext } from "react";
import { List } from "../components/List";
import { sortShapeElements } from "../helpers";
import { UIItem } from "../types";

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  const elements = sortShapeElements(List);
  return <Context.Provider value={{ elements }}>{children}</Context.Provider>;
}

export function useElements() {
  const value = useContext(Context);
  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }
  return value;
}
