import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainContent from "../components/MainContent";
import Home from "../routes/Home";
import HomeLayout from "../routes/Home/HomeLayout";

const routes = createRoutesFromElements(
  <Route path="/" element={<HomeLayout />}>
    <Route index element={<Home />} />
    <Route path=":id" element={<MainContent />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
