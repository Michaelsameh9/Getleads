import React, { useState } from "react";
import { Col, Container, Row, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import "../pages/home.css";


export default function Home() {
    const [fix, setfix] = useState(false);
    const changebg = () => {
      if (window.scrollY >= 500) {
        setfix(true);
      } else {
        setfix(false);
      }
    }
    window.addEventListener('scroll', changebg);
  return (
    <>
    <Container fluid>
        <Row>
        <Col>
              <Navbar expand="lg" className={fix ? "navbar-fixed" : "bg-body-tertiary"}>
                <Navbar.Brand href="/" className="nav-logo"><div className="bg-logo"></div></Navbar.Brand>
                <Container fluid>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#aboutus">About Us</Nav.Link>
                      <Nav.Link href="#ourServices">Our Services</Nav.Link>
                      <Nav.Link href="#ourWork">Our Work</Nav.Link>
                      <Nav.Link href="#whoweAre">Who we are</Nav.Link>
                      <NavDropdown title="Extra Pages " id="basic-nav-dropdown">
                        <ul className="nav-lik">
                          <li> <a href="/blog list">Blog List</a></li>
                          <li> <a href="/">Blog Single</a></li>
                          <li> <a href="/">Faq</a></li>
                          <li> <a href="/">Terms</a></li>
                          <li> <a href="/loginPage">Login Page</a></li>
                          <li> <a href="/signupPage">Signup Page</a></li>
                        </ul>
                        <NavDropdown.Divider />
                        <ul className="nav-drow">
                          <li> <a href="#Other Demos">Other Demos</a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#a1a1a1" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            <ul id="drobpown">
                              <li><a href="/">Consulting</a></li>
                              <li><a href="/">Web Service</a></li>
                              <li><a href="/">App</a></li>
                              <li><a href="/">E-Learning</a></li>
                              <li><a href="/">Medical</a></li>
                              <li><a href="/">Wood Working</a></li>
                              <li><a href="/">Event</a></li>
                              <li><a href="/">Yoga</a></li>
                            </ul>
                          </li>
                        </ul>
                      </NavDropdown>
                      <Button variant="primary" className="btn-hire-us" href="#Hire us">Hire us</Button>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
        </Row>
    </Container>
    </>
  )
}
