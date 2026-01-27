import React from "react";
import OwnerNavbar from "../../components/Owner/OwnerNavbar";
import SideBar from "../../components/Owner/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <OwnerNavbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
