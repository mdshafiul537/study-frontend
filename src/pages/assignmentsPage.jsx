import React, { useEffect, useState } from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";

const AssignmentsPage = () => {
  const assignmentResp = useLoaderData();

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(assignmentResp)) {
      if (!isEmptyOrNull(assignmentResp.status)) {
        setAssignments(assignmentResp.response);
      }
    }
  }, [assignmentResp]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-12">
        {assignments?.map((item) => {
          return (
            <div className="w-full grid grid-cols-1 gap-9" key={`assignment-${item?._id}`}>
              <AssignmentCard assignment={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsPage;
