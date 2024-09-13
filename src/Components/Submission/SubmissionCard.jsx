/* eslint-disable react/prop-types */
import React from "react";
import { getStrDate } from "../../utils/helper";
import { NavLink } from "react-router-dom";

const SubmissionCard = ({ submission, ...props }) => {
  const {
    _id,
    title,
    marks,
    assignment,
    status,
    obtainedMarks,
    userEmail,
    userName,
    create,
    resourcesURL,
  } = submission;
  return (
    <div className="w-full grid grid-cols-1 gap-5 h-52">
      <div className="grid grid-cols-12 gap-6 h-full border-b border-emerald-600 py-5">
        <div className="col-span-2 h-44 overflow-hidden">
          <img src={resourcesURL} className="w-full h-fit" />
        </div>
        <div className="col-span-10 grid grid-cols-1 gap-4 p-5">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4  font-bold">
              <div className="flex flex-row gap-1 items-center">
                Marks:
                <i className="text-2xl text-amber-600 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Status:
                <i className="text-2xl fa-solid fa-pen-to-square"></i>
                {status}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Due Date:{" "}
                <i className="text-red-500 text-2xl fa-regular fa-clock"></i>
                {getStrDate(create)}
              </div>
            </div>
          </div>
          <div className="">
            <NavLink
              to={`/submissions/${_id}`}
              className="px-5 py-1 bg-emerald-700 text-white font-bold"
            >
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionCard;
