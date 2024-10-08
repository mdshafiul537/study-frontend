import React, { useContext, useEffect, useState } from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";

import Loading from "../Components/Utils/Loading";
import {
  getBoolean,
  getStrDate,
  isEmptyOrNull,
  onConfirmAlert,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import EsModal from "../Components/Utils/EsModal";
import SubmissionForm from "../Components/Submission/SubmissionForm";
import { AuthContext } from "../Context/AuthProvider";
import { REQUEST_HEADER } from "../utils/types";
import { Helmet } from "react-helmet";
import {
  getAssignmentDeleteAction,
  getAssignmentSubmission,
} from "../utils/loaderAction";

const AssignmentPage = ({ ...props }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignment, setAssignment] = useState({});

  const assignmentResp = useLoaderData();

  useEffect(() => {
    if (!isEmptyOrNull(assignmentResp)) {
      if (assignmentResp.status) {
        setIsDataLoading(false);
        setAssignment(assignmentResp.response);
      }
    }
  }, [assignmentResp]);

  const onAssignmentSubmitAction = (values) => {
    setIsModalOpen(false);
    onNotify("Please, wait Assignment is Submitting");

    getAssignmentSubmission(values)
      .then((resp) => {
        if (resp.status) {
          onNotifySuccess(resp.message);
        } else {
          onNotifyError(resp.message);
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  const onAssignmentDeleteAction = () => {
    setIsModalOpen(false);
    onNotify("Sending Assignment Delete request. Please wait ");

    getAssignmentDeleteAction(_id)
      .then((resp) => {
        if (resp.data.status) {
          if (resp.data.response.deletedCount === 1) {
            onNotifySuccess(resp.data.message);
            navigate("/assignments");
          }
        } else {
          onNotifyError(resp.data.message);
        }
      })
      .catch((error) => {
        console.log("Delete Error, ", error);

        onNotifyError(error.message);
      });
  };

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDeleteModalToggle = () => {
    if (user?.email === userEmail) {
      onConfirmAlert({
        title: `You want delete this '${title} '`,
        onConfirm: onAssignmentDeleteAction,
      });
    } else {
      onNotifyError(
        "You couldn't delete this assignment !!. You can only delete your assignment"
      );
    }
  };
  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }
  console.log("User ", user);

  const {
    create,
    description,
    difficulty,
    dueDate,
    isPremium,
    marks,
    thumbnail,
    title,
    userEmail,
    userName,
    _id,
  } = assignment;
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>U-Learn | Assignment</title>
      </Helmet>
      <EsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId="submission-modal"
        content={
          <SubmissionForm
            name="Submit"
            onSubmit={onAssignmentSubmitAction}
            initialValues={{
              title,
              assignment: _id,
              status: "Pending",
              resourcesURL: null,
              marks,
              obtainedMarks: 0,
              feedback: null,
              userEmail: user.email || null,
              userName: user.displayName || null,
            }}
          />
        }
      />
      <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-8 py-9 min-h-[400px]">
        <div className="col-span-2 xs:col-span-1 sm:col-span-1 md:col-span-2">
          <img src={thumbnail} className="w-full" />
        </div>
        <div className="col-span-3 xs:col-span-1 sm:col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row xs:flex-wrap sm:flex-wrap md:flex-nowrap gap-4 font-bold">
              <div className="flex flex-row gap-2 items-center dark:text-xl dark:font-semibold">
                Marks:
                <i className="text-amber-700 dark:text-orange-800 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-2 items-center dark:text-xl dark:font-semibold">
                Difficulty Level:
                <i className="text-red-500 dark:text-red-800  fa-solid fa-layer-group"></i>
                {difficulty}
              </div>
              <div className="flex flex-row gap-2 items-center dark:text-xl dark:font-semibold">
                Due Date:{" "}
                <i className="text-emerald-700 dark:text-red-800 fa-regular fa-clock"></i>
                {getStrDate(dueDate)}
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div className="w-full my-6 col-span-5 xs:col-span-1 sm:col-span-1 md:col-span-5">
          <div className="flex flex-row gap-6">
            {getBoolean(params?.delete) ? (
              <div className="">
                <button
                  className="bg-red-600 dark:bg-red-900 px-6 py-3 text-white font-bold cursor-pointer"
                  onClick={onDeleteModalToggle}
                >
                  Delete this assignment
                </button>
              </div>
            ) : (
              <div className="">
                <button
                  className="bg-emerald-700 dark:bg-emerald-900 dark:shadow-2xl  px-6 py-3 text-white font-bold cursor-pointer"
                  onClick={onModalToggle}
                >
                  Take Assignment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
