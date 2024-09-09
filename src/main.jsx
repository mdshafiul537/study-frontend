import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import ContextWrapper from "./Context/ContextWrapper";
import router from "./Components/Routers/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </StrictMode>
);
