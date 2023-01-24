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
  | "toogle"
  | "input"
  | "animal"
  | "text"
  | "3d Shape";
