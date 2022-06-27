import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

function StudentTable(props) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [studentClasses, setStudentClasses] = useState([]);

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

    console.log(isAlreadyAdded(sid, classId));

    if (isAlreadyAdded(sid, classId)) {
      alert("student is already added to this class");
      return;
    }

    axios
      .put(`api/v1/class/add?studentId=${sid}&classId=${classId}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const isEqualMaxStudents = () => {};

  function isAlreadyAdded(sid, sclassId) {
    let val = false;
    let result1 = axios
      .get(`api/v1/class/student/${sid}`)
      .then((res) => {
        setStudentClasses(res.data.body);
        // console.log(res.data.body);
      })
      .catch((err) => console.log(err));

    studentClasses.map((item) => {
      if (item.classId == sclassId) {
        val = true;
      }
    });

    return val;
  }

  return (
    <>
      {/* {console.log(props.maxStudents)} */}
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
