import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import UserTables from "../components/UserTables";

function AdminDashboard() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <UserTables />
      </div>
    </>
  );
}

export default AdminDashboard;
