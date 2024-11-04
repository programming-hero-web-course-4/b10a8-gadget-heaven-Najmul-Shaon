import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "./NavBar/NavBar";

const Root = () => {
  return (
    <div>
      {/* <div className="p-2 border-2 border-[#F6F6F6] container mx-auto rounded-xl">
        <Home></Home>
      </div> */}
      <div className="bg-slate-100">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
