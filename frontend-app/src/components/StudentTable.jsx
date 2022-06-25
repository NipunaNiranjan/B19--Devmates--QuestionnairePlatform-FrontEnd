import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

function StudentTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let params = useParams();

  useEffect(() => {
    refreshUsers();
  }, []);

  function refreshUsers() {
    const ProjectAPI = axios
      .get("api/v1/users/allUsers")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const HandleAddUser = (sid) => {
    const classId = params.classId;
    console.log(sid);

    axios
      .put(`api/v1/class/add?studentId=${sid}&classId=${classId}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container fluid style={{ marginTop: "80px" }}>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <h1>Add student to class - {params.className}</h1>
            <input
              class="form-control"
              type="text"
              placeholder="Search by user name.."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Table borderless hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username </th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => {
                    if (searchTerm === "") {
                      return user;
                    } else if (
                      user.username
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return user;
                    }
                  })
                  .map((user) =>
                    user.role === "ROLE_STUDENT" ? (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>
                          <Button
                            variant="warning"
                            key={user.id}
                            onClick={() => HandleAddUser(user.id)}
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