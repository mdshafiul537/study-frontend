import React, { useEffect, useState, useRef } from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import { getAllAssignmentByDifficulty } from "../utils/loaderAction";
import { Helmet } from "react-helmet";

const AssignmentsPage = () => {
  const assignmentResp = useLoaderData();

  const [assignments, setAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenuElm = useRef();

  useEffect(() => {
    if (!isEmptyOrNull(assignmentResp)) {
      if (!isEmptyOrNull(assignmentResp.status)) {
        setAssignments(assignmentResp.response);
      }
    }
  }, [assignmentResp]);

  const onFilterAction = (level) => {
    if (level !== difficulty) {
      if (!isEmptyOrNull(dropdownMenuElm.current)) {
        dropdownMenuElm.current.open = false;
      }

      getAllAssignmentByDifficulty(level).then((data) => {
        if (!isEmptyOrNull(data)) {
          if (data.status) {
            setAssignments(data.response);
          }
        }
      });

      setDifficulty(level);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>U-Learn |All Assignment</title>
      </Helmet>
      <div className="my-6 border-b  py-2 dark:text-teal-50 font-medium">
        Sort By Difficulty:
        <details ref={dropdownMenuElm} className="dropdown">
          <summary
            className="flex flex-row justify-between items-center m-1 shadow-2xl capitalize dark:!bg-transparent border border-gray-500  dark:border-teal-600 py-1 px-2 mx-4 rounded-lg w-44 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {difficulty ? difficulty : <span>Select One </span>}{" "}
            <span className="text-sm">
              <i
                className={`fa-solid fa-angle-down transition-all duration-200 ${
                  isOpen ? " rotate-0 " : " -rotate-90 "
                }`}
              ></i>
            </span>
          </summary>
          <ul className="menu dropdown-content bg-base-100 dark:bg-teal-950 rounded-box z-[1] w-52 p-2 shadow-2xl">
            <li
              className="border-b"
              onClick={() => {
                onFilterAction("easy");
              }}
            >
              <span>Easy</span>
            </li>
            <li
              className="border-b"
              onClick={() => {
                onFilterAction("medium");
              }}
            >
              <span>Medium</span>
            </li>
            <li
              className="border-b"
              onClick={() => {
                onFilterAction("hard");
              }}
            >
              <span>Hard</span>
            </li>
            <li
              className="border-b"
              onClick={() => {
                onFilterAction("");
              }}
            >
              <span>All</span>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {assignments?.map((item) => {
          return (
            <div
              className="w-full grid grid-cols-1 gap-9"
              key={`assignment-${item?._id}`}
            >
              <AssignmentCard assignment={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsPage;
