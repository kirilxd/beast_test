import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import BoatsList from "../pages/BoatsList";
import Rent from "../pages/Rent";
import Return from "../pages/Return";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <BoatsList />,
      },
      {
        path: "/rent/:boatId",
        element: <Rent />,
      },
      {
        path: "/return/:boatId",
        element: <Return />,
      },
    ],
  },
]);
export default router;
