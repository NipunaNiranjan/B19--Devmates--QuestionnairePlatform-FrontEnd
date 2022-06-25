import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    refreshClasses();
  }, []);

  function refreshClasses() {
    axios
      .get("api/v1/class/student/4")
      .then((res) => {
        setClasses(res.data.body);
        console.log(res.data.body);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader
          title="Expand"
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          ></a>
        </CDBSidebarHeader>

        {/* Admin sidebar options */}
        {localStorage.getItem("userRole") === "ROLE_ADMIN" ? (
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/dashboard/admin"
                activeClassName="activeClicked"
                title="Dashboard"
              >
                <CDBSidebarMenuItem icon="th-large">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/dashboard/admin/viewusers"
                activeClassName="activeClicked"
                title="Manage users"
              >
                <CDBSidebarMenuItem icon="table">
                  Manage users
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/dashboard/admin/viewClasses"
                activeClassName="activeClicked"
                title="Manage Classes"
              >
                <CDBSidebarMenuItem icon="table">
                  Manage Classes
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        ) : null}

        {/* teacher sidebar options */}
        {localStorage.getItem("userRole") === "ROLE_TEACHER" ? (
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/dashboard/teacher/viewClasses"
                activeClassName="activeClicked"
                title="Dashboard"
              >
                <CDBSidebarMenuItem icon="th-large">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/dashboard/teacher"
                activeClassName="activeClicked"
                title="Create Class"
              >
                <CDBSidebarMenuItem icon="sticky-note">
                  Create Class
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/dashboard/teacher/viewClasses"
                activeClassName="activeClicked"
                title="View Classes"
              >
                <CDBSidebarMenuItem icon="table">
                  View Classes
                </CDBSidebarMenuItem>
              </NavLink>
              <CDBSidebarMenuItem>
                <a
                  href="/createSAQPage"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  Short Answer Questionnaire
                </a>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem>
                <a
                  href="/createShortAnswer"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  File Upload Questionnaire
                </a>
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        ) : null}

        {/* Student sidebar options */}
        {localStorage.getItem("userRole") === "ROLE_STUDENT" ? (
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/dashboard/student"
                activeClassName="activeClicked"
                title="Dashboard"
              >
                <CDBSidebarMenuItem icon="th-large">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              {/* classes of student */}
              {classes.map((item) => (
                <NavLink
                  exact
                  to={"/dashboard/Class/" + item.classId + "/" + item.className}
                  activeClassName="activeClicked"
                  title={item.className}
                >
                  <CDBSidebarMenuItem icon="book">
                    {item.className}
                  </CDBSidebarMenuItem>
                </NavLink>
              ))}
            </CDBSidebarMenu>
          </CDBSidebarContent>
        ) : null}
        {/* 
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
