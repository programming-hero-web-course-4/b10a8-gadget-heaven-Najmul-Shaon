import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const links = (
    <>
      <li className="font-bold text-white text-base">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-white text-base">
        <NavLink to="statistics">Statistics</NavLink>
      </li>
      <li className="font-bold text-white text-base">
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-primary_color rounded-t-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-white text-xl font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-6">
        <p className="text-2xl md:text-4xl bg-white p-2 md:p-3 rounded-full">
          <IoCartOutline></IoCartOutline>
        </p>
        <p className="text-2xl md:text-3xl bg-white p-2 md:p-4 rounded-full">
          <FaRegHeart></FaRegHeart>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
