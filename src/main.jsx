
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Slider from "./Component/Home/Slider.jsx";
import Slider_details from "./Component/Home/Slider_details.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Login/Signup.jsx";
import { ToastBar, Toaster } from "react-hot-toast";
// import Dashboard from "./Component/Dashboard/Dashboard.jsx";
// import DashboardLayout from "./Component/"
import DashboardLayout from './Component/Dashboard/Dashboard.jsx'
import ProfileForm from "./Component/Dashboard/ProfileForm.jsx";
import MyResume from "./Component/Dashboard/MyResume.jsx";
import Selectionresume from "./components/Selectionresume.jsx"; // Ensure this path is correct
import Uploadresume from "./components/Uploadresume.jsx";
import Form from "./components/Forms.jsx"; // Ensure this path is correct

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "slide/:id",
        element: <Slider_details />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <ProfileForm />,
          },
          {
            path: "resumes",
            element: <MyResume />,
          },
          {
            path: "ai-resume-builder",
            element: <Selectionresume />,
          },
          {
            path: "uploadresume",
            element: <Uploadresume />,
          },
          {
            path: "form",
            element: <Form />,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    <App />
    <Toaster />
  </React.StrictMode>
);
