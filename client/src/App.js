import React, { useContext } from "react";
import LoginPage from "./Pages/Login";
import Recorder from "./Pages/Recorder";
import Layout from "./Layout";
import axios from "axios";
import UserContextProvider, { UserContext } from "./userContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.withCredentials = true;

function App() {
  const { user } = useContext(UserContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Recorder />,
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
