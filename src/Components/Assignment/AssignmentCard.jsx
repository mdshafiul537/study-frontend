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
    <div className="w-full grid grid-cols-1 gap-5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <img src={thumbnail} />
        </div>
        <div className="col-span-10">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4 font-bold">
              <div className="flex flex-row gap-1 items-center">
                Marks:<i className="text-amber-600 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Difficulty Level:
                <i className="text-red-500 fa-solid fa-layer-group"></i>
                {difficulty}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Due Date: <i className="text-red-500 fa-regular fa-clock"></i>
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
      <div className="">
        <NavLink
          to={`/assignments/${_id}`}
          className="px-5 py-1 bg-emerald-700 text-white font-bold"
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default AssignmentCard;
