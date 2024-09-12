import React, { useEffect, useState } from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";

const AssignmentsPage = () => {
  const assignmentResp = useLoaderData();

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(assignmentResp)) {
      console.log("assignmentResp ", assignmentResp);

      if (!isEmptyOrNull(assignmentResp.status)) {
        setAssignments(assignmentResp.response);
      }
    }
  }, [assignmentResp]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8">
        {assignments?.map((item) => {
          console.log("Item ", item);
          return (
            <div className="w-full" key={`assignment-${item?._id}`}>
              <AssignmentCard assignment={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsPage;
