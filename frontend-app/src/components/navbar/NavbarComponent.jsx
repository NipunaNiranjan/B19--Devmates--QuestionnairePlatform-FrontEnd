import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>Home</Navbar.Brand>
      <Nav.Link style={{ justifyContent: flexEnd }}>user</Nav.Link>
    </Navbar>
  );
}

export default NavbarComponent;
