import React from "react";
import { useLocation } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import StudentTable from "../components/StudentTable";

function AddStudents() {
  const maxStudents = useLocation().state.maxStudents;

  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <StudentTable maxStudents={maxStudents} />
      </div>
    </>
  );
}

export default AddStudents;
