import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateClass from "./createClassOrganization/CreateClass";
import CreateOrganization from "./createClassOrganization/CreateOrganization";

function TeacherDashboard() {
  const [createClassButton, setCreateclassButton] = useState(false);

  return (
    <div className="m-lg-5 ">
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
      <div>{createClassButton ? <CreateClass /> : <CreateOrganization />}</div>
    </div>
  );
}

export default TeacherDashboard;
