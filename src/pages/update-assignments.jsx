/* eslint-disable react/jsx-key */
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import axios from "axios";
import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import AssignmentForm from "../Components/Assignment/AssignmentForm";

const UpdateAssignmentsPage = ({ ...props }) => {
  const onAssignmentUpdateAction = (values, reset) => {
    onNotify("Sending Update request. Please wait");
    axios
      .post(`${import.meta.env.VITE_API_URL}/products`, values)
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          if (resp.data.status) {
            onNotifySuccess(resp.data.message);
            reset({
              title: null,
              description: null,
              marks: null,
              thumbnail: null,
              difficulty: null,
              dueDate: null,
              isPremium: false,
            });
          } else {
            onNotifyError("Item add failed");
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
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
  return (
    <React.Fragment>
      <AssignmentForm
        onSubmitAction={onAssignmentUpdateAction}
        initValues={initValues}
      />
    </React.Fragment>
  );
};

export default UpdateAssignmentsPage;
