import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, PropsWithChildren, Suspense } from "react";

const LazyHome = lazy(() => import("../routes/Home"));
const LazyHomeLayout = lazy(() => import("../routes/Home/HomeLayout"));
const LazyMain = lazy(() => import("../routes/Main"));

const SuspenseComponent = ({ children }: PropsWithChildren) => (
  <Suspense
    fallback={<div style={{ flex: 1, color: "white" }}>Loading...</div>}
  >
    {children}
  </Suspense>
);

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <SuspenseComponent>
        <LazyHomeLayout />
      </SuspenseComponent>
    }
  >
    <Route
      index
      element={
        <SuspenseComponent>
          <LazyHome />
        </SuspenseComponent>
      }
    />
    <Route
      path=":id"
      element={
        <SuspenseComponent>
          <LazyMain />
        </SuspenseComponent>
      }
    />
  </Route>
);

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
