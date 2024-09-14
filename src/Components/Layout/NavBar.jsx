import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <li className="text-white  font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="text-white  font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/assignments"> Assignments</NavLink>
      </li>
      <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/create-assignments">Create Assignment</NavLink>
      </li>
      <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/pending-assignments"> Pending Assignments</NavLink>
      </li>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavBar;
