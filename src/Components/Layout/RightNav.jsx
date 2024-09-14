import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import NavBarLogin from "./NavBarLogin";

export const RightNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);

  const onLogOut = () => {
    logOut();
    document.activeElement.blur();
  };

  const onToggleMode = (e) => {
    console.log("onToggleMode ");
    setIsDark(!isDark);
    // document.body.classList.toggle("dark");
    const htmDoc = document.querySelector("html").classList;
    htmDoc.toggle("dark");
  };

  return (
    <React.Fragment>
      {!user ? (
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
          <div className="w-6 text-2xl transition-all duration-1000 ">
            {!isDark ? (
              <span
                className="w-5 h-5 text-[rgba(255,255,255,.8)] cursor-pointer"
                onClick={onToggleMode}
              >
                <i className="fa-solid fa-bahai"></i>
              </span>
            ) : (
              <span
                className="w-5 h-5 text-gray-800 cursor-pointer"
                onClick={onToggleMode}
              >
                <i className="fa-solid fa-moon"></i>
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink
            className=" text-white font-semibold hover:border-white border-b border-transparent "
            to="/users/submissions"
          >
            My-Submissions
          </NavLink>
          <span
            className="text-white font-semibold hover:border-white border-b border-transparent"
            onClick={onLogOut}
          >
            Logout
          </span>
          <div className="w-6 text-2xl ">
            {!isDark ? (
              <span
                className="w-5 h-5 text-[rgba(255,255,255,.8)] cursor-pointer"
                onClick={onToggleMode}
              >
                <i className="fa-solid fa-bahai"></i>
              </span>
            ) : (
              <span
                className="w-5 h-5 text-gray-800 cursor-pointer"
                onClick={onToggleMode}
              >
                <i className="fa-solid fa-moon"></i>
              </span>
            )}
          </div>
          <div className="w-9 h-9 rounded-full ring-2 ring-offset-2 ring-gray-700 dark:ring-white">
            <img
              alt={user?.displayName}
              src={user?.photoURL}
              className="rounded-full"
            />
          </div>
        </>
      )}
    </React.Fragment>
  );
};
