import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import { FcPortraitMode } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";

function AdminDashboardMain() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        {/* <NavLink to="/dashboard/admin/viewusers">view users</NavLink>
        <NavLink to="/dashboard/admin/viewClasses">view classes</NavLink> */}

        <div className="container cont_style p-5 mb-5 mt-5  justify-content-center align-items-center">
          <CardGroup className="justify-content-center align-items-center ">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Card className="h-100 w-100 " onClick={() => alert("hi")}>
                  <center>
                    <FcPortraitMode className="mt-5" size="5rem" />
                  </center>
                  <Card.Body>
                    <center>
                      <Card.Title>Manage User</Card.Title>
                    </center>
                  </Card.Body>
                </Card>
              </div>

              <div className=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Card
                  className="h-100 w-100 "
                  //  style={{ width: "300px", height: "250px", paddingTop: "60px" }}
                >
                  <center>
                    <FcReadingEbook className="mt-5" size="5rem" />
                  </center>
                  <Card.Body>
                    <center>
                      <Card.Title>Manage Classes</Card.Title>
                    </center>
                  </Card.Body>
                </Card>
              </div>

              <div className=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Card
                  className="h-100 w-100"
                  //  style={{ width: "300px", height: "250px", paddingTop: "60px" }}
                >
                  <center>
                    <FcOrganization className="mt-5" size="5rem" />
                  </center>
                  <Card.Body>
                    <center>
                      <Card.Title>Manage Organization</Card.Title>
                    </center>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardMain;
