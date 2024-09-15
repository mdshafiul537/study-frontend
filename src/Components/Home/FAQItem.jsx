/* eslint-disable react/prop-types */
import React from "react";

const FAQItem = ({ question = "", answer = "", ...props }) => {
  return (
    <div className="grid grid-cols-7 md:grid-cols-7 sm:grid-cols-1 xs:grid-cols-1 gap-8 border-b border-emerald-400 dark:border-emerald-700 py-5 shadow-xl">
      <div className="col-span-2  p-2 space-y-3 space-x-3">
        <h3 className="text-xl font-bold">
          <span className="border border-gray-400 dark:border-teal-200 py-1 px-2 rounded-lg bg-emerald-500 dark:bg-emerald-700">
            <i className="fa-solid fa-q"></i>
          </span>{" "}
          {question}
        </h3>
      </div>
      <div className="col-span-5  p-2 space-y-3">
        <span className="bg-emerald-600 dark:bg-emerald-900 border border-gray-400 dark:border-teal-500 py-2 px-3 rounded-lg">
          <i className="fa-solid fa-a"></i>
        </span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
