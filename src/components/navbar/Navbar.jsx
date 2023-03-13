import React from "react";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const Nav_bar = () => {
  return (
    <Navbar
      className="d-flex justify-content-center align-items-center"
      variant="dark"
      collapseOnSelect
      expand="lg"
    >
      <Container className="py-4 mx-0" style={{ "min-width": "80%" }}>
        <Navbar.Brand href="#home" className="klg__navbar-links_logo">
          HealthHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end "
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="" className="klg__navbar-links_container">
              Products
            </Nav.Link>
            <Nav.Link href="" className="klg__navbar-links_container">
              Contact Us
            </Nav.Link>
            <Nav.Link href="" className="klg__navbar-links_container">
              Resources
            </Nav.Link>
          </Nav>
          <Button
            variant="primary"
            className="ml-3"
            style={{
              background: "#9DD84E",
              borderRadius: "52px",
              border: "none",
              transition: "background-color 0.3s ease",
            }}
          >
            Request Demo
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};

export default Nav_bar;
