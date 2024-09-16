/* eslint-disable react/jsx-key */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../utils/helper";
import AssignmentForm from "../Components/Assignment/AssignmentForm";
import { AuthContext } from "../Context/AuthProvider";
import { REQUEST_HEADER } from "../utils/types";
import { Helmet } from "react-helmet";
import { getCreateAssignmentAction } from "../utils/loaderAction";

const CreateAssignmentsPage = ({ ...props }) => {
  const { user } = useContext(AuthContext);

  const onCreateAssignmentAction = (values, reset) => {
    onNotify("Sending item add request. Please wait");
    getCreateAssignmentAction(values)
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
      <Helmet>
        <title>U-Learn |Add Assignment</title>
      </Helmet>
      <AssignmentForm
        initValues={initValues}
        onSubmitAction={onCreateAssignmentAction}
        name="Create"
      />
    </React.Fragment>
  );
};

export default CreateAssignmentsPage;
