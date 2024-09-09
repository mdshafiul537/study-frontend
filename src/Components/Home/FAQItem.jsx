import React from "react";

const FAQItem = ({ question = "", answer = "", ...props }) => {
  return (
    <div className="grid grid-cols-7 border-b border-emerald-400 py-5 shadow-xl">
      <div className="col-span-2  py-2">
        <h3 className="text-xl font-bold">
          <span className="border border-gray-400 py-1 px-2 rounded-lg bg-emerald-500">
            <i className="fa-solid fa-q"></i>
          </span>{" "}
          {question}
        </h3>
      </div>
      <div className="col-span-5  py-2">
        <span className="bg-emerald-600 border border-gray-400 py-1 px-2 rounded-lg">
          <i className="fa-solid fa-a"></i>
        </span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
