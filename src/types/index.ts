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
  | "3dShape";

export type SidebarRoute = {
  name: string;
  urlPath: URLPath;
};
