import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import "../pages/header.css";


export default function Header() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar expand="lg" className="bg2-body-tertiary">
                            <Container>
                                <Navbar.Brand href="/"><div className="bg-log">
                                </div>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"  className='btn-toggle'/>
                                <Navbar.Collapse id="basic-navbar-nav2">
                                    <Nav className="me-auto2">
                                        <ul className="nav-log">
                                            <li><a href="/Section2">Section 2</a></li>
                                            <li><a href="/Section3">Section 3</a></li>
                                            <li><a href="/Section4">Section 4</a></li>
                                            <li><a href="/Section5">Section 5</a></li>
                                        </ul>
                                        <button className="btn-log" href="/loginPage">login</button>
                                        <button className="btn-sign" href="/signupPage">Signup</button>
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
