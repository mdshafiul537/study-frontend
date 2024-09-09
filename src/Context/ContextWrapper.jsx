/* eslint-disable react/prop-types */
import React from "react";

const ContextWrapper = ({ children, ...props }) => {
  return <React.Fragment {...props}>{children}</React.Fragment>;
};

export default ContextWrapper;
