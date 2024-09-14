import React, { useState, useEffect } from "react";
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

import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";

import { REQUEST_HEADER } from "../utils/types";

const PendingSubmissionPage = () => {
  const submissionResp = useLoaderData();

  const navigate = useNavigate();
  const [submission, setSubmission] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    axios
      .put(`${import.meta.env.VITE_API_URL}/submissions`, values, {
        headers: REQUEST_HEADER,
      })
      .then((resp) => {
        if (resp.data.status) {
          onNotifySuccess(resp.data.message);
          navigate(0);
        } else {
          onNotifyError(resp.data.message);
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
    _id,
  } = submission;

  const onModalToggle = () => {
    if (status === "Pending") {
      setIsModalOpen(!isModalOpen);
    }
  };
  return (
    <div className="container mx-auto">
      <EsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId="submission-modal"
        content={
          <SubmissionForm
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
              _id,
            }}
            isUpdate={true}
          />
        }
      />
      <div className="grid grid-cols-5 gap-8 py-9">
        <div className="col-span-2">
          <div className="h-[650px] overflow-hidden">
            <img src={resourcesURL} className="" />
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4 font-bold">
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
