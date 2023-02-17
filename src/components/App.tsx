import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../routes/Home";
import HomeLayout from "../routes/Home/HomeLayout";
import Main from "../routes/Main";

const routes = createRoutesFromElements(
  <Route path="/" element={<HomeLayout />}>
    <Route index element={<Home />} />
    <Route path=":id" element={<Main />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
