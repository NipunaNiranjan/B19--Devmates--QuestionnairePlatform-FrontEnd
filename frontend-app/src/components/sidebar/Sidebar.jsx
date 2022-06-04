import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Sidebar() {
  return (
    <Navbar>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">home</Nav.Link>
        <Nav.Link eventKey="foo">foo</Nav.Link>
        <Nav.Link eventKey="bar">bar</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          disabled
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
