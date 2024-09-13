import React, { useState, useEffect } from "react";
import Submissions from "../Components/Submission/Submissions";
import { isEmptyOrNull, onNotifySuccess } from "../utils/helper";
import Loading from "../Components/Utils/Loading";
import { useLoaderData } from "react-router-dom";
import { getAllSubmissionByUser } from "../utils/loaderAction";

const MySubmissionsPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    getAllSubmissionByUser("md.shafiul.islam@gmail.com")
      .then((resp) => {
        if (!isEmptyOrNull(resp)) {
          if (resp.status) {
            onNotifySuccess(resp.message);
            setSubmissions(resp.response);
            setIsDataLoading(false);
          }
        }
      })
      .catch((error) => {
        console.log("User Error ", error);
      });
  }, []);

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

  return (
    <div className="container mx-auto">
      <div className="w-full grid grid-cols-1">
        <Submissions submissions={submissions} key="all-pending-submissions" />
      </div>
    </div>
  );
};

export default MySubmissionsPage;
