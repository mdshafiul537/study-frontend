/* eslint-disable react/prop-types */
import React from "react";
import SubmissionCard from "./SubmissionCard";

const Submissions = ({ submissions, ...props }) => {
  return (
    <div className="w-full grid grid-cols-1">
      {submissions?.map((submission) => {
        return (
          <SubmissionCard
            key={`submissions-${submission?._id}`}
            submission={submission}
          />
        );
      })}
    </div>
  );
};

export default Submissions;
