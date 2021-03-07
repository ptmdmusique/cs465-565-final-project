import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        🐉 DnD Character Generator
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/generate">
            Generate
          </Nav.Link>

          <Nav.Link as={NavLink} to="/edit">
            Edit
          </Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};
