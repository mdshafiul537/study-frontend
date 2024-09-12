import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/home";
import CreateAssignmentsPage from "../../pages/create-assignments";
import ContactPage from "../../pages/contactPage";
import AssignmentsPage from "../../pages/assignmentsPage";
import LoginPage from "../../pages/loginPage";
import RegisterPage from "../../pages/registerPage";
import PendingAssignmentsPage from "../../pages/pending-assignments";
import UpdateAssignmentsPage from "../../pages/update-assignments";
import AssignmentPage from "../../pages/assignmentPage";
import { getAssignmentById, getAssignments } from "../../utils/loaderAction";
import axios from "axios";

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
