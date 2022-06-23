import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          ></a>
        </CDBSidebarHeader>

        {/* teacher sidebar options */}
        {localStorage.getItem("userRole") === "ROLE_TEACHER" ? (
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem>
                <a
                  href="/dashboard/teacher"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  Create Class
                </a>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem>
                <a
                  href="/dashboard/teacher/viewClasses"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  View Classes
                </a>
              </CDBSidebarMenuItem>
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
              >
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        ) : null}

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
