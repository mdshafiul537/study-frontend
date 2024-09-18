import React, { useState, useEffect, useContext } from "react";
import Submissions from "../Components/Submission/Submissions";
import {
  getStrDate,
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import Loading from "../Components/Utils/Loading";
import { useLoaderData, useNavigate } from "react-router-dom";
import EsModal from "../Components/Utils/EsModal";
import SubmissionForm from "../Components/Submission/SubmissionForm";

import { REQUEST_HEADER } from "../utils/types";
import { AuthContext } from "../Context/AuthProvider";

import EsIframe from "../Components/Utils/EsIframe";
import { Helmet } from "react-helmet";
import {
  getUpdateSubmission,
  getUpdateSubmissionViaPost,
} from "../utils/loaderAction";

const PendingSubmissionPage = () => {
  const submissionResp = useLoaderData();

  const navigate = useNavigate();
  const [submission, setSubmission] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!isEmptyOrNull(submissionResp)) {
      if (submissionResp.status) {
        setSubmission(submissionResp.response);
        setIsDataLoading(false);
      }
    }
  }, [submissionResp]);

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

  const onAssignmentSubmitAction = (values) => {
    setIsModalOpen(false);
    onNotify("Please, wait marks is Submitting");
    // getUpdateSubmissionViaPost
    getUpdateSubmission(values)
      .then((resp) => {
        console.log("getUpdateSubmission Resp, ", resp);
        if (!isEmptyOrNull(resp.data)) {
          if (resp.data.status) {
            onNotifySuccess(resp.data.message);
            navigate(0);
          } else {
            onNotifyError(resp.data.message);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

  const {
    create,
    assignment,
    feedback,
    marks,
    obtainedMarks,
    status,
    resourcesURL,
    title,
    userEmail,
    userName,
    examinerEmail,
    _id,
  } = submission;

  const onModalToggle = () => {
    if (status === "Pending") {
      setIsModalOpen(!isModalOpen);
    }
  };
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>U-Learn |Pending Submissions</title>
      </Helmet>
      <EsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId="submission-modal"
        content={
          <SubmissionForm
            name="Give Mark"
            onSubmit={onAssignmentSubmitAction}
            initialValues={{
              create,
              assignment,
              feedback,
              marks,
              obtainedMarks,
              status,
              resourcesURL,
              title,
              userEmail,
              userName,
              examinerEmail: user?.email,
              _id,
            }}
            isUpdate={true}
          />
        }
      />
      <div className="grid grid-cols-12 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-12  gap-8 py-9">
        <div className="col-span-12 xs:col-span-1 sm:col-span-1 md:col-span-12 py-2">
          <h2 className="text-2xl font-bold border-b pb-3">{title}</h2>
        </div>
        <div className="col-span-8 xs:col-span-1 sm:col-span-1 md:col-span-8">
          <div className="min-h-[450px] overflow-hidden max-[90%]:">
            {/* <img src={resourcesURL} className="" /> */}
            <EsIframe src={resourcesURL} />
          </div>
        </div>
        <div className="col-span-4 xs:col-span-1 sm:col-span-1 md:col-span-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-row flex-wrap gap-5 text-xl font-bold items-center">
              <span>
                <i className="fa-solid fa-user-pen"></i> {userName}
              </span>
              <span>
                <i className="fa-regular fa-envelope"></i> {userEmail}
              </span>
            </div>
            <div className="flex flex-row gap-2 text-xl font-bold items-center">
              <span>Examiner:</span>
              <i className="fa-solid fa-user-check"></i>
              <span>{examinerEmail}</span>
            </div>
            <div className="flex flex-row flex-wrap gap-4 font-bold">
              <div className="flex flex-row gap-2 items-center">
                Marks:<i className="text-amber-600 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Status:
                <i className=" fa-solid fa-pen-to-square"></i>
                {status}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Due Date: <i className="text-red-500 fa-regular fa-clock"></i>
                {getStrDate(create)}
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold text-xl">
                {status === "Complete" ? (
                  <span>
                    Your Obtained Marks:: &nbsp; {obtainedMarks}&nbsp;
                    <i className="text-amber-600 fa-solid fa-award"></i>
                  </span>
                ) : (
                  ""
                )}
              </h2>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-2xl border-b py-4">
                Assignment Feedback
              </h3>
              <p>{!isEmptyOrNull(feedback) ? feedback : ""}</p>
            </div>
            <div className="w-full my-6 border-t border-dashed py-6">
              <div className="flex flex-row">
                <div className="">
                  <button
                    className={`bg-emerald-800 px-6 py-3 text-white font-bold ${
                      status === "Pending"
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } `}
                    onClick={onModalToggle}
                  >
                    {status === "Pending" ? "Give Mark" : "Mark Given"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingSubmissionPage;
