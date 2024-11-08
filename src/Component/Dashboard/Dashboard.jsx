import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto bg-primary_color py-12">
        <div className="text-center space-y-6">
          <h3 className="font-bold text-3xl text-white">Gadget Heaven</h3>
          <p className="font-normal text-white text-base w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div
          role="tablist"
          className="tabs tabs-boxed flex gap-6 justify-center bg-primary_color mt-8"
        >
          <NavLink
            to="/dashboard/cart"
            role="tab"
            className={({ isActive }) =>
              `tab btn btn-outline border border-white ${
                isActive ? "tab-active" : ""
              } `
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            role="tab"
            className={({ isActive }) =>
              `tab btn btn-outline border border-white ${
                isActive ? "tab-active" : ""
              } `
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
