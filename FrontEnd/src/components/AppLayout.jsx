import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
