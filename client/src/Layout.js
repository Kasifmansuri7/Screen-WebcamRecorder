import React from "react";
import Headers from "./Components/Headers";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default Layout;
