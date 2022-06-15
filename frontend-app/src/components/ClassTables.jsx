import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function ClassTables() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    refreshClasses();
  }, []);

  function refreshClasses() {
    const ProjectAPI = axios
      .get("http://localhost:8080//viewClasses")
      .then((res) => {
        setClasses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name </th>
            <th>From</th>
            <th>To</th>
            <th>Max no of students</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.status ? "true" : "false"}</td>
              <td>
                {user.status ? (
                  <Button
                    variant="warning"
                    key={user.id}
                    onClick={() => handeleDeactivateUser(user.id)}
                  >
                    deactivate
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handeleActivateUser(user.id)}
                  >
                    activate
                  </Button>
                )}
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </>
  );
}

export default ClassTables;
