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
