import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useNavigate } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("user");
  const [userRole, setUserRole] = useState("user");

  useEffect(() => {
    refreshUser();
  });

  const refreshUser = () => {
    setUsername(localStorage.getItem("username"));
    setUserRole(localStorage.getItem("userRole"));
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleNavigationHome = () => {
    if (userRole === "ROLE_ADMIN") {
      navigate("/dashboard/admin");
    } else if (userRole === "ROLE_STUDENT") {
      navigate("/dashboard/student");
    } else if (userRole === "ROLE_TEACHER") {
      //navigate("/dashboard/admin/viewusers");
    }
  };

  const handleNavigationAccount = () => {
    navigate("/userProfile");
  };

  return (
    <Navbar
      bg="myNavbarColor"
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand onClick={() => handleNavigationHome()}>Home</Navbar.Brand>

      <NavbarToggle />
      <Navbar.Collapse className="right-aligned">
        <Nav>
          <Nav.Link onClick={() => handleLogout()}>Log out</Nav.Link>
          <NavDropdown align="end" title={username}>
            <NavDropdown.Item onClick={() => handleNavigationHome()}>
              Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigationAccount()}>
              Account
            </NavDropdown.Item>
            <NavDropdown.Item>Grades</NavDropdown.Item>
            <hr />
            <NavDropdown.Item onClick={() => handleLogout()}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
