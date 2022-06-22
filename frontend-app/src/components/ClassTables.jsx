import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function ClassTables() {
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    refreshClasses();
  }, []);

  function refreshClasses() {
    const ProjectAPI = axios
      .get("viewClasses")
      .then((res) => {
        setClasses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handeleDelete(data) {
    axios
      .put("admin/deleteClass/" + data)
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
            <h1>Classes</h1>
            <input
              class="form-control"
              type="text"
              placeholder="Search by class name.."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Table borderless hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name </th>
                  <th>Teacher</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Max no of students</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {classes
                  .filter((item) => {
                    if (searchTerm === "") {
                      return item;
                    } else if (
                      item.className
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item) =>
                    item.flag ? null : (
                      <tr key={item.classId}>
                        <td>{item.classId}</td>
                        <td>{item.className}</td>
                        <td>{item.user.username}</td>
                        <td>{item.fromDate}</td>
                        <td>{item.toDate}</td>
                        <td>{item.noOfStudents}</td>
                        <td>
                          <Button
                            variant="warning"
                            key={item.classId}
                            onClick={() => handeleDelete(item.classId)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* <Table striped bordered hover responsive flex>
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
          {classes.map((item) => (
            <tr key={item.classId}>
              <td>{item.classId}</td>
              <td>{item.className}</td>
              <td>{item.fromDate}</td>
              <td>{item.toDate}</td>
              <td>{item.noOfStudents}</td>
              <td>
                <Button
                  variant="warning"
                  key={item.classId}
                  onClick={() => handeleDelete(item.classId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>
  );
}

export default ClassTables;
