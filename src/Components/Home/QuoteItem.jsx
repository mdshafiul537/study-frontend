/* eslint-disable react/prop-types */
import React from "react";

const QuoteItem = ({
  title = "",
  quote = "",
  profileUrl = "",
  name = "",
  ...props
}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-4xl font-semibold text-gray-400">
        <i className="fa-solid fa-quote-left"></i>
      </div>
      <h3 className="text-center text-xl font-bold ">{title}</h3>
      <p>{quote}</p>
      <div className="w-20 h-20 items-center flex flex-col justify-center">
        <img
          src={profileUrl}
          className="w-full h-full rounded-full ring-4 ring-offset-2 ring-emerald-800 "
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default QuoteItem;
