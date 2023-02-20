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
  | "toogle"
  | "input"
  | "animal"
  | "text"
  | "3dShape"
  | "image"
  | "pattern";

export type RouteItem = {
  name: string;
  urlPath: URLPath;
};
