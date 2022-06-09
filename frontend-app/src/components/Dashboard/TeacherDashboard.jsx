import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateClass from "./createClassOrganization/CreateClass";
import CreateOrganization from "./createClassOrganization/CreateOrganization";

function TeacherDashboard() {
  const [createClassButton, setCreateclassButton] = useState(false);

  // const handleButton1 = () => {
  //   setCreateclassButton = true;
  // };

  // const handleButton2 = () => {
  //   setCreateclassButton = false;
  // };

  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        onClick={() => setCreateclassButton(true)}
      >
        Craete class
      </Button>{" "}
      <Button
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
