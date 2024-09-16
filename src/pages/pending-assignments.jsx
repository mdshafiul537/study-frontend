import React, { useState, useEffect } from "react";
import Submissions from "../Components/Submission/Submissions";
import { isEmptyOrNull } from "../utils/helper";
import Loading from "../Components/Utils/Loading";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const PendingAssignmentsPage = () => {
  const submissionResp = useLoaderData();

  const [submissions, setSubmissions] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (!isEmptyOrNull(submissionResp)) {
      if (submissionResp.status) {
        setSubmissions(submissionResp.response);
        setIsDataLoading(false);
      }
    }
  }, [submissionResp]);

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>U-Learn |Pending Assignment</title>
      </Helmet>
      <div className="w-full grid grid-cols-1">
        <Submissions submissions={submissions} key="all-pending-submissions" />
      </div>
    </div>
  );
};

export default PendingAssignmentsPage;
