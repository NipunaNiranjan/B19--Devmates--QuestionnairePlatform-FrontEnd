import React, { useState } from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import CreateClass from "../components/createClassOrganization/CreateClass";
import CreateOrganization from "../components/createClassOrganization/CreateOrganization";
import { Button } from "react-bootstrap";

function TeachersDashboard() {
  const [createClassButton, setCreateclassButton] = useState(true);

  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        {/* forms */}
        <div className="m-lg-5 container-fluid">
          <Button
            className="mw-sm-100"
            variant="primary"
            size="lg "
            onClick={() => setCreateclassButton(true)}
          >
            Craete class
          </Button>{" "}
          <Button
            className="mw-sm-100"
            variant="secondary"
            size="lg"
            onClick={() => setCreateclassButton(false)}
          >
            Create Organization
          </Button>
          <div>
            {createClassButton ? <CreateClass /> : <CreateOrganization />}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default TeachersDashboard;
