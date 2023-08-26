import React from "react";
import LoginPage from "./Pages/Login";
import WebCamRecorder from "./Pages/WebCamRecorder";
import Layout from "./Layout";
import axios from "axios";
import UserContextProvider, { UserContext } from "./userContext";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import ScreenRecording from "./Pages/ScreenRecord";

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <WebCamRecorder />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
