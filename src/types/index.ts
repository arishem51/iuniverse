export type UIItem = {
  component: React.ReactElement;
  type: URLPath;
};

type URLPath =
  | "all"
  | "shape"
  | "button"
  | "loader"
  | "card"
  | "checkbox"
  | "toggle"
  | "input"
  | "animal"
  | "text"
  | "3dShape"
  | "image"
  | "pattern"
  | "slider";

export type RouteItem = {
  name: string;
  urlPath: URLPath;
};
