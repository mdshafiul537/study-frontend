import React from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";

const AssignmentsPage = () => {
  return (
    <div className="contents mx-auto">
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full">
          <AssignmentCard />
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
