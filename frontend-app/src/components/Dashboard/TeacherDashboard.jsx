import React, { useState } from "react";
import { Button } from "react-bootstrap";

function TeacherDashboard() {
  const [createClassButton, setCreateclassButton] = useState(true);

  const handleButton1 = () => {
    setCreateclassButton = true;
  };

  const handleButton2 = () => {
    setCreateclassButton = false;
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleButton1}>
        Large button
      </Button>{" "}
      <Button variant="secondary" size="lg" onClick={handleButton2}>
        Large button
      </Button>
    </div>
  );
}

export default TeacherDashboard;
