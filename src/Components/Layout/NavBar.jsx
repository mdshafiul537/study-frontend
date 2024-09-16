import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);

  const onLogOut = () => {
    logOut();
    document.activeElement.blur();
  };

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

      {user && (
        <>
          <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
            <NavLink to="/pending-assignments"> Pending Assignments</NavLink>
          </li>
          <li>
            <NavLink
              className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white rounded-b-sm"
              to="/users/submissions"
            >
              My-Submissions
            </NavLink>
          </li>
        </>
      )}
      <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>

      {user && (
        <li>
          <span
            className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white rounded-b-sm"
            onClick={onLogOut}
          >
            Logout
          </span>
        </li>
      )}
    </React.Fragment>
  );
};

export default NavBar;
