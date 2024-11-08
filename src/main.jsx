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
import Cart from "./Component/Cart/Cart.jsx";
import Wishlist from "./Component/Wishlist/Wishlist.jsx";
import Offer from "./Component/Offers/Offer.jsx";

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
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/details/:product_id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
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
