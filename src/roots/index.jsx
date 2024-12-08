import React from "react";
import userRoutes from "./user.routes";
import adminRoutes from "./admin.routes";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";

const mergeRouter = [
  ...userRoutes,
  ...adminRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
const routers = createBrowserRouter(mergeRouter);
export default routers;
