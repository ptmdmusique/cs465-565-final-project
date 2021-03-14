import React from "react";
import { Nav, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

export const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4} className="my-2" />
        <Col sm={4} className="my-2">
          <div style={{ backgroundColor: "red", borderRadius: "5px" }}>
            <Nav.Link as={NavLink} to="/generate">
              <span className={"create-character"}>Create Your Own DnD Character</span>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={4} className="my-2" />
      </Row>
      <Row>
        <Col sm={12} className="my-2">
          <Image
            src={
              "https://assets1.ignimgs.com/2019/07/31/dandd-br-1564600399165.jpg"
            }
            fluid
            className={"landing-image"}
          />
        </Col>
      </Row>
    </Container>
  );
};
