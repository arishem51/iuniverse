export type UIItem = {
  component: React.ReactElement;
  type: Type;
};

export type Type =
  | "all"
  | "shape"
  | "button"
  | "loader"
  | "card"
  | "checkboxe"
  | "toogle witche"
  | "input"
  | "animal";
