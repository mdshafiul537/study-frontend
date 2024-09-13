import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/home";
import CreateAssignmentsPage from "../../pages/create-assignments";
import ContactPage from "../../pages/contactPage";
import AssignmentsPage from "../../pages/assignmentsPage";
import PendingAssignmentsPage from "../../pages/pending-assignments";
import UpdateAssignmentsPage from "../../pages/update-assignments";
import AssignmentPage from "../../pages/assignmentPage";
import {
  getAllSubmission,
  getAllSubmissionByUser,
  getAllSubmissionStatus,
  getAssignmentById,
  getAssignments,
  getSubmissionById,
} from "../../utils/loaderAction";
import axios from "axios";
import PendingSubmissionPage from "../../pages/pending-submissionPage";
import SubmissionsPage from "../../pages/submissionsPage";
import MySubmissionsPage from "../../pages/mySubmissionsPage";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/assignments",
        element: <AssignmentsPage />,
        loader: getAssignments,
      },
      {
        path: "/create-assignments",
        element: <CreateAssignmentsPage />,
      },
      {
        path: "/update-assignments",
        element: <UpdateAssignmentsPage />,
      },
      {
        path: "/pending-assignments",
        element: <PendingAssignmentsPage />,
        loader: async () => {
          return getAllSubmissionStatus("Pending");
        },
      },
      {
        path: "/submissions",
        element: <SubmissionsPage />,
        loader: async () => {
          return getAllSubmissionStatus("Complete");
        },
      },
      {
        path: "/users/submissions",
        element: <MySubmissionsPage />,
      },
      {
        path: "/submissions/:id",
        element: <PendingSubmissionPage />,
        loader: async ({ params }) => {
          return getSubmissionById(params.id);
        },
      },
      {
        path: "/assignments/:id",
        element: <AssignmentPage />,
        loader: ({ params }) => {
          return getAssignmentById(params?.id);
        },
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
