import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";

function StudentDashboardMain() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    refreshClasses();
  }, []);

  function refreshClasses() {
    const sid = localStorage.getItem("userID");
    axios
      .get(`api/v1/class/student/${sid}`)
      .then((res) => {
        setClasses(res.data.body);
        console.log(res.data.body);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />

        <div className="container cont_style p-3 mb-5 mt-3  text-dark justify-content-center align-items-center">
          <div className="row justify-content-center m-5 ">
            {classes.map((item) => (
              <div className="col-6 ">
                <div className="card m-5 ">
                  <div className="card-body b_style">
                    <h5 className="card-title ">{item.className}</h5>
                  </div>
                  <div className="card-footer  fStyle">
                    <small className="text-muted">
                      {" "}
                      <Link
                        to={
                          "/dashboard/teacher/addStudentClass/" + item.classId
                        }
                      >
                        Click to enter class-{">"}
                      </Link>{" "}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardMain;
