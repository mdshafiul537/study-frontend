/* eslint-disable react/prop-types */
import React from "react";
import AuthProvider from "./AuthProvider";

const ContextWrapper = ({ children, ...props }) => {
  return (
    <React.Fragment {...props}>
      <AuthProvider>{children}</AuthProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
