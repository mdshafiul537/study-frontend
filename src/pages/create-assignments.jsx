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

const CreateAssignmentsPage = ({ ...props }) => {
  const onCreateAssignmentAction = (values, reset) => {
    onNotify("Sending item add request. Please wait");
    axios
      .post(`${import.meta.env.VITE_API_URL}/assignments`, values)
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
            onNotifyError(resp.data.message);
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
    dueDate: new Date(),
    isPremium: false,
  };
  return (
    <React.Fragment>
      <AssignmentForm
        initValues={initValues}
        onSubmitAction={onCreateAssignmentAction}
      />
    </React.Fragment>
  );
};

export default CreateAssignmentsPage;
