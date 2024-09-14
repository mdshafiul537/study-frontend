/* eslint-disable react/jsx-key */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import axios from "axios";

import { useLoaderData, useNavigate } from "react-router-dom";
import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import AssignmentForm from "../Components/Assignment/AssignmentForm";
import Loading from "../Components/Utils/Loading";
import { REQUEST_HEADER } from "../utils/types";
import esFetchApi from "../utils/fetchApi";

axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";

const UpdateAssignmentsPage = ({ ...props }) => {
  const assignmentResp = useLoaderData();
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [assignment, setAssignment] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (!isEmptyOrNull(assignmentResp)) {
      if (assignmentResp.status) {
        setIsLoadingData(false);
        setAssignment(assignmentResp.response);
      }
    }
  }, [assignmentResp]);
  const onAssignmentUpdateAction = (values, reset) => {
    onNotify("Sending Update request. Please wait");

    axios
      .put(`${import.meta.env.VITE_API_URL}/assignments`, values)
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          if (resp.data.status) {
            onNotifySuccess(resp.data.message);

            navigate("/assignments");
          } else {
            onNotifyError("Item add failed");
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
        console.log("Fetch Update, error, ", error);
      });
  };

  const initValues = {
    title: null,
    description: null,
    marks: null,
    thumbnail: null,
    difficulty: null,
    dueDate: null,
    isPremium: false,
  };

  if (isLoadingData) {
    return <Loading isLoading={isLoadingData} />;
  }
  console.log("As", assignment);
  return (
    <React.Fragment>
      <AssignmentForm
        onSubmitAction={onAssignmentUpdateAction}
        initValues={assignment}
        name="Update"
        isUpdate={true}
      />
    </React.Fragment>
  );
};

export default UpdateAssignmentsPage;
