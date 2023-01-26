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
  | "checkbox"
  | "toogle"
  | "input"
  | "animal"
  | "text"
  | "3d Shape";
