import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";

function AdminDashboardMain() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <NavLink to="/dashboard/admin/viewusers">view users</NavLink>
        <NavLink to="/dashboard/admin/viewClasses">view classes</NavLink>
      </div>
    </>
  );
}

export default AdminDashboardMain;
