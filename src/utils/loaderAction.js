import axios from "axios";

import { isEmptyOrNull } from "./helper";

export const getAssignments = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/assignments`);

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
      `${import.meta.env.VITE_API_URL}/submissions/status?type=${type}`,
      { withCredentials: true }
    );

    return resp.data;
  } catch (error) {
    console.log("getAllSubmission Error, ", error);
  }
};

export const getAllSubmission = async (type) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/submissions`,
      { withCredentials: true }
    );

    return resp.data;
  } catch (error) {
    console.log("getAllSubmission Error, ", error);
  }
};

export const getAllSubmissionByUser = async (user) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/submissions/user/${user}`,
      { withCredentials: true }
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
      `${import.meta.env.VITE_API_URL}/submissions/${id}`,
      { withCredentials: true }
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
      { userEmail: user },
      { withCredentials: true }
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
      {},
      { withCredentials: true }
    );

    console.log("Sign out Resp, ", resp);

    return resp.data;
  } catch (error) {
    console.log("Assignments,", error);
  }
};

export const addUserUsingAPI = async (user) => {};
