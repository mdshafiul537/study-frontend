/* eslint-disable react/prop-types */
import React from "react";

const Loading = ({ isLoading, ...props }) => {
  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <span className="loading loading-spinner loading-lg bg-green-600"></span>
      </div>
    );
  }
  return "";
};

export default Loading;
