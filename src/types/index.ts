export type UIItem = {
  component: React.ReactElement;
  type: Type;
};

export type Type = "all" | "shapes" | "buttons" | "loaders";
