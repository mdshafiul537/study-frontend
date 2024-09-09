import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/home";
import CreateAssignmentsPage from "../../pages/create-assignments";
import ContactPage from "../../pages/contactPage";
import AssignmentsPage from "../../pages/assignmentsPage";
import LoginPage from "../../pages/loginPage";
import RegisterPage from "../../pages/registerPage";

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
      },
      {
        path: "/create-assignments",
        element: <CreateAssignmentsPage />,
      },
      {
        path: "/pending-assignments",
        element: <CreateAssignmentsPage />,
      },

      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
