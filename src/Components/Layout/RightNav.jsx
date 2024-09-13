import React from "react";
import { NavLink } from "react-router-dom";

export const RightNav = () => {
  return (
    <>
      <NavLink
        className=" text-white font-semibold hover:border-white border-b border-transparent "
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className=" text-white font-semibold hover:border-white border-b border-transparent "
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
};
