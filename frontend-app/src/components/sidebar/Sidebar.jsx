import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

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

            {/* <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>

          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a> */}
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
