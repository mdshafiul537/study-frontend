/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLogin = ({ onLogOut, ...props }) => {
  return (
    <React.Fragment>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white list-none">
        <span onClick={onLogOut}>Logout</span>
      </li>
    </React.Fragment>
  );
};

export default NavBarLogin;
