import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

const Root = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
