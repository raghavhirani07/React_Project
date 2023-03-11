import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Layout() {
  return (
    <>
      <CssBaseline>
        <Navbar />
        <Outlet />
      </CssBaseline>
    </>
  );
}

export default Layout;
