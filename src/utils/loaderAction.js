import axios from "axios";

import { isEmptyOrNull } from "./helper";
import { REQUEST_HEADER } from "./types";

axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";
axios.defaults.headers = REQUEST_HEADER;

export const getAssignments = async () => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/assignments`,
      { withCredentials: true }
    );

    return resp.data;
  } catch (error) {
    console.log("Assignments,", error);
  }
};

export const getAssignmentById = async (id) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/assignments/${id}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.log("getAssignmentById, error ", error);
    return {};
  }
};

export const getAllSubmissionStatus = async (type) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/submissions/status?type=${type}`
    );

    return resp.data;
  } catch (error) {
    console.log("getAllSubmission Error, ", error);
  }
};

export const getAllAssignmentByDifficulty = async (level) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/assignments/difficulty?level=${level}`
    );

    return resp.data;
  } catch (error) {
    console.log("getAllAssignmentByDifficulty Error, ", error);
  }
};

export const getAllSubmission = async (type) => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/submissions`);

    return resp.data;
  } catch (error) {
    console.log("getAllSubmission Error, ", error);
  }
};

export const getAllSubmissionByUser = async (user) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/submissions/user/${user}`
    );

    return resp.data;
  } catch (error) {
    console.log("get Submission By ID Error, ", error);
    return error;
  }
};
export const getSubmissionById = async (id) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/submissions/${id}`
    );

    return resp.data;
  } catch (error) {
    console.log("get Submission By ID Error, ", error);
  }
};

export const getAccessToken = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/token`,
      { userEmail: user }
    );

    return resp.data;
  } catch (error) {
    console.log("Assignments,", error);
  }
};

export const getSignOut = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      {}
    );

    console.log("Sign out Resp, ", resp);

    return resp.data;
  } catch (error) {
    console.log("Assignments,", error);
  }
};

export const addUserUsingAPI = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/users`,
      user
    );

    return resp.data;
  } catch (error) {
    console.log("User Added Error,", error);
  }
};

export const getSendContactMessage = async (message) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/messages`,
      message
    );

    return resp.data;
  } catch (error) {
    console.log("Message Send Error, ", error);
  }
};

export const getAssignmentSubmission = async (values) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/submissions`,
      values,
      {
        headers: REQUEST_HEADER,
      }
    );
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const getAssignmentDeleteAction = async (id) => {
  try {
    const resp = await axios.delete(
      `${import.meta.env.VITE_API_URL}/assignments/${id}`,
      {
        headers: REQUEST_HEADER,
      }
    );

    return resp;
  } catch (error) {
    return error;
  }
};

export const getCreateAssignmentAction = async (assignment) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/assignments`,
      assignment,
      {
        headers: REQUEST_HEADER,
      }
    );
    return resp;
  } catch (error) {
    return error;
  }
};

export const getUpdateSubmission = async (uSubmission) => {
  try {
    const resp = await axios.put(
      `${import.meta.env.VITE_API_URL}/submissions`,
      uSubmission
    );

    return resp;
  } catch (error) {
    return error;
  }
};

export const getAssignmentUpdateAction = async (uAssignment) => {
  try {
    const resp = await axios.put(
      `${import.meta.env.VITE_API_URL}/assignments`,
      uAssignment
    );

    return resp;
  } catch (error) {
    return error;
  }
};
