/* eslint-disable react/jsx-key */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
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
import { AuthContext } from "../Context/AuthProvider";
import { REQUEST_HEADER } from "../utils/types";

axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";

const CreateAssignmentsPage = ({ ...props }) => {
  const { user } = useContext(AuthContext);

  const onCreateAssignmentAction = (values, reset) => {
    onNotify("Sending item add request. Please wait");
    axios
      .post(`${import.meta.env.VITE_API_URL}/assignments`, values, {
        headers: REQUEST_HEADER,
      })
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
    userEmail: user.email,
    userName: user.displayName,
  };
  return (
    <React.Fragment>
      <AssignmentForm
        initValues={initValues}
        onSubmitAction={onCreateAssignmentAction}
        name="Create"
      />
    </React.Fragment>
  );
};

export default CreateAssignmentsPage;
