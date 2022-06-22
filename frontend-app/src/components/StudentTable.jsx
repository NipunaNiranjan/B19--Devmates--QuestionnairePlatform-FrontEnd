import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function StudentTable() {
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
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) =>
                  user.role === "ROLE_STUDENT" ? (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>
                        <Button
                          variant="warning"
                          key={user.id}
                          //   onClick={}
                        >
                          Add+
                        </Button>
                        {/* {user.status ? (
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
                        )} */}
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StudentTable;
