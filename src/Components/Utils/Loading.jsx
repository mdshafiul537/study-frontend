/* eslint-disable react/prop-types */
import React from "react";
import loaderFile from "../../../public/assets/lottie/loader-2.json";
import Lottie from "lottie-react";

const Loading = ({ isLoading, ...props }) => {
  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="h-40 w-40">
          <Lottie animationData={loaderFile} className="h-full" />
        </div>
      </div>
    );
  }
  return "";
};

export default Loading;
