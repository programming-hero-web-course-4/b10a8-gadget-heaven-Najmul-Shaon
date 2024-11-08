import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Root/Root.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Home from "./Component/Home/Home.jsx";
import Statistics from "./Component/Statistics/Statistics.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import Gadgets from "./Component/Gadgets/Gadgets.jsx";
import ViewDetails from "./Component/ViewDetails/ViewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/gadgets/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:product_id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
