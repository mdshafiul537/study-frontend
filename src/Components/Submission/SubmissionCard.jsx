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
    <div className="w-full grid grid-cols-1 gap-5 min-h-52 md:min-h-52 lg:min-h-52 xs:min-h-[450px] sm:min-h-[450px]">
      <div className="grid grid-cols-12 md:grid-cols-12 xs:grid-cols-4 sm:grid-cols-4 gap-6 h-full border-b border-emerald-600 py-5">
        <div className="col-span-2 md:col-span-2 xs:col-span-4 sm:col-span-4 h-44 !max-h-44 !overflow-y-hidden">
          <div className="sm:max-h-40 xs:max-h-44 max-h-44 block !overflow-y-hidden">
            <img
              src={resourcesURL}
              className="w-full h-fit !block !overflow-hidden"
              width={`100%`}
              height={160}
            />
          </div>
        </div>

        <div className="col-span-10 md:col-span-10 xs:col-span-4 sm:col-span-4 grid grid-cols-1 p-5">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4  font-bold xs:flex-wrap sm:flex-wrap md:flex-nowrap">
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
            <div className="w-full">
              <NavLink
                to={`/submissions/${_id}`}
                className="px-5 py-1 bg-emerald-700 dark:bg-emerald-900 text-white font-bold xs:w-full sm:w-full"
              >
                Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionCard;
