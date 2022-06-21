import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1NTcwMTIyMCwiZXhwIjoxNjU1Nzg3NjIwfQ.bWKexTsV7g3YKPZE5TML6ZpBzFmZtKoUV8570Xz3KvCatHFzV5Gf9-tzlvZRJkUHw83lCSQwdQibEz1r0yRTMw";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function ClassTables() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    refreshClasses();
  }, []);

  function refreshClasses() {
    const ProjectAPI = axios
      .get("http://localhost:8080/viewClasses")
      .then((res) => {
        setClasses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handeleDelete(data) {
    axios
      .delete("http://localhost:8080/admin/deleteClass/" + data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    //refresh page
    window.location.reload(false);
  }

  return (
    <>
      <Table striped bordered hover responsive flex>
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
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ClassTables;
