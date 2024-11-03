import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Root from "./Component/Root/Root.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Statistics from "./Component/Statistics/Statistics.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
