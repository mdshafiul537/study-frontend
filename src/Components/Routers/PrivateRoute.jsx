/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Utils/Loading";
import { isEmptyOrNull } from "../../utils/helper";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isEmptyOrNull(user)) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
