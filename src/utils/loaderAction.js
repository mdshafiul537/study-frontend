import { isEmptyOrNull } from "./helper";

export const getAssignmentById = async (id) => {
  try {
    if (!isEmptyOrNull(id)) {
      return {};
    }
  } catch (error) {
    console.log("getAssignmentById Error ", error);
  }
};
