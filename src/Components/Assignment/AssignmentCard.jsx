/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { getStrDate } from "../../utils/helper";
import ShortText from "../Utils/ShortText";

const AssignmentCard = ({
  title,
  description,
  marks,
  thumbnail,
  difficulty,
  dueDate = new Date(),
  ...props
}) => {
  return (
    <div className="w-full grid grid-cols-1 gap-5">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <img src={thumbnail} />
        </div>
        <div className="col-span-10">
          <div className="flex flex-col">
            <h2>{title}</h2>
            <div className="flex flex-row">
              <div className="flex flex-row gap-4 items-center">
                Marks:<i className="fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-4 items-center">
                Difficulty Level:<i className="fa-solid fa-layer-group"></i>
                {difficulty}
              </div>
              <div className="flex flex-row gap-4 items-center">
                Due Date: <i className="fa-regular fa-clock"></i>
                {getStrDate(dueDate)}
              </div>
            </div>
            <p>
              {
                <ShortText
                  text={description}
                  size={130}
                  url={`/assignments/${50}`}
                />
              }
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <NavLink
          to={`/assignments/${50}`}
          className="px-5 py-1 bg-emerald-700 text-white font-bold"
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default AssignmentCard;
