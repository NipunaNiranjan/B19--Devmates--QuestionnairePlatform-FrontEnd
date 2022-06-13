import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function UserTables() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  function refreshUsers() {
    const ProjectAPI = axios
      .get("http://localhost:8080/admin/view_users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handeleDeactivateUser(data) {
    console.log("http://localhost:8080/admin/deactivate/" + data);

    axios
      .put("http://localhost:8080/admin/deactivate/" + data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Username </th>
            <th>Role</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
                  <Button variant="primary">activate</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UserTables;
