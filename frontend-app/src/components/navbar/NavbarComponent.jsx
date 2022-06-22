import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [username, setUsername] = useState("user");

  useEffect(() => {
    refreshUser();
  });

  const refreshUser = () => {
    setUsername(localStorage.getItem("username"));
  };

  return (
    <Navbar
      bg="myNavbarColor"
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand>Home</Navbar.Brand>

      <NavbarToggle />
      <Navbar.Collapse className="right-aligned">
        <Nav>
          <Nav.Link href="/logout">Log out</Nav.Link>
          <NavDropdown align="end" title={username}>
            <NavDropdown.Item>Dashboard</NavDropdown.Item>
            <NavDropdown.Item>Account</NavDropdown.Item>
            <NavDropdown.Item>Grades</NavDropdown.Item>
            <hr />
            <NavDropdown.Item>Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
