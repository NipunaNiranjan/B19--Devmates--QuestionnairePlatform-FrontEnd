import React, { useState } from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import CreateClass from "../components/createClassOrganization/CreateClass";

function TeachersDashboard() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <div className="m-lg-5 container-fluid">
          <h1>Create a class</h1>
          <CreateClass />

          <hr />
        </div>
      </div>
    </>
  );
}

export default TeachersDashboard;
