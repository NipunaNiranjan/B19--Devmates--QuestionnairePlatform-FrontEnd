import React from "react";
import ClassTables from "../components/ClassTables";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";

function AdminDashboardViewClasses() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <ClassTables />
      </div>
    </>
  );
}

export default AdminDashboardViewClasses;
