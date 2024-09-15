/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { getStrDate } from "../../utils/helper";
import ShortText from "../Utils/ShortText";

const AssignmentCard = ({ assignment, ...props }) => {
  const {
    create,
    description,
    difficulty,
    dueDate,
    isPremium,
    marks,
    thumbnail,
    title,
    userEmail,
    userName,
    _id,
  } = assignment;
  return (
    <div className="w-full grid grid-cols-1 gap-6">
      <div className="grid grid-cols-12 md:grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 gap-6 ">
        <div className="col-span-2 md:col-span-2 xs:col-span-1 sm:col-span-1">
          <div className="w-full">
            <img src={thumbnail} />
          </div>
        </div>
        <div className="col-span-10 xs:col-span-1 sm:col-span-1 md:col-span-10">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4 font-bold sm:flex-wrap xs:flex-wrap md:flex-nowrap">
              <div className="flex flex-row gap-2 items-center">
                Marks:
                <i className="text-amber-600 dark:text-orange-600 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-2 items-center">
                Difficulty Level:
                <i className="text-red-500 dark:text-red-800 fa-solid fa-layer-group"></i>
                {difficulty}
              </div>
              <div className="flex flex-row gap-2 items-center">
                Due Date:{" "}
                <i className="text-emerald-700 dark:text-red-800 fa-regular fa-clock"></i>
                {getStrDate(dueDate)}
              </div>
            </div>
            <p>
              {
                <ShortText
                  text={description}
                  size={130}
                  url={`/assignments/${_id}`}
                />
              }
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <NavLink
          to={`/assignments/${_id}`}
          className="px-5 py-1 bg-emerald-700 dark:bg-emerald-900 text-white font-bold "
        >
          Details
        </NavLink>

        <NavLink
          to={`/update-assignments/${_id}`}
          className="px-5 py-1 bg-amber-600 dark:bg-orange-600 text-white font-bold"
        >
          Update
        </NavLink>

        <NavLink
          to={`/assignments/${_id}/true`}
          className="px-5 py-1 bg-red-600 dark:bg-red-800 text-white font-bold"
        >
          Delete
        </NavLink>
      </div>
    </div>
  );
};

export default AssignmentCard;
