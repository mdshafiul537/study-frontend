import React, { useEffect, useState } from "react";
import AssignmentCard from "../Components/Assignment/AssignmentCard";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Components/Utils/Loading";
import {
  getStrDate,
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import EsModal from "../Components/Utils/EsModal";
import SubmissionForm from "../Components/Submission/SubmissionForm";

const AssignmentPage = ({ ...props }) => {
  const params = useParams();
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
    axios
      .post(`${import.meta.env.VITE_API_URL}/submissions`, values)
      .then((resp) => {
        if (resp.data.status) {
          onNotifySuccess(resp.data.message);
        } else {
          onNotifyError(resp.data.message);
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

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
      <EsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId="submission-modal"
        content={
          <SubmissionForm
            onSubmit={onAssignmentSubmitAction}
            initialValues={{
              title,
              assignment: _id,
              status: "Pending",
              resourcesURL: null,
              marks,
              obtainedMarks: 0,
              feedback: null,
            }}
          />
        }
      />
      <div className="grid grid-cols-5 gap-8 py-9">
        <div className="col-span-2">
          <img src={thumbnail} className="" />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-row gap-4 font-bold">
              <div className="flex flex-row gap-1 items-center">
                Marks:<i className="text-amber-600 fa-solid fa-award"></i>
                {marks}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Difficulty Level:
                <i className="text-red-500 fa-solid fa-layer-group"></i>
                {difficulty}
              </div>
              <div className="flex flex-row gap-1 items-center">
                Due Date: <i className="text-red-500 fa-regular fa-clock"></i>
                {getStrDate(dueDate)}
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full my-6">
        <div className="flex flex-row">
          <div className="">
            <button
              className="bg-emerald-800 px-6 py-3 text-white font-bold cursor-pointer"
              onClick={onModalToggle}
            >
              Take Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
