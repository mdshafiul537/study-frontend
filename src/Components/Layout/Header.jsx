import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./NavBar";
import { RightNav } from "./RightNav";

const Header = () => {
  return (
    <div className="w-full bg-emerald-700 dark:bg-emerald-900">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown text-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-gray-500 "
              >
                <NavBar />
              </ul>
            </div>
            <NavLink to={"/"} className=" text-white text-xl">
              <i className="fa-solid fa-object-group"></i>
              &nbsp; U-Learn
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 ">
              <NavBar />
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <RightNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
