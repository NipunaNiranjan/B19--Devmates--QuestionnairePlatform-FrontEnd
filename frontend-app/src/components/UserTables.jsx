import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function UserTables() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  function refreshUsers() {
    const ProjectAPI = axios
      .get("admin/view_users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handeleDeactivateUser(data) {
    axios
      .put("admin/deactivate/" + data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    //refresh page
    window.location.reload(false);
  }

  function handeleActivateUser(data) {
    axios
      .put("admin/activate_user/" + data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    //refresh page
    window.location.reload(false);
  }

  return (
    <>
      <Container fluid style={{ marginTop: "80px" }}>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <Table borderless hover>
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
                        <Button
                          variant="primary"
                          onClick={() => handeleActivateUser(user.id)}
                        >
                          activate
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      {/* <Table striped bordered hover responsive>
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
                  <Button
                    variant="primary"
                    onClick={() => handeleActivateUser(user.id)}
                  >
                    activate
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>
  );
}

export default UserTables;
