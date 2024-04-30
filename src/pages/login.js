import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/login.css';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Header from './header';
import Footer2 from './footer2';


import { Helmet } from 'react-helmet-async';



export default function Login() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Getleads - Login</title>
                <meta name="description" content="Getleads - Login" />
            </Helmet>
            <Header />
            <Container id="login" name="login">
                <Row>
                    <Col className="for-log">
                        <h4 className="p-fom">
                            Welcome Back.
                        </h4>
                        <p className="p-fom2"> LOGIN TO YOUR ACCOUNT</p>
                        <Form className="contint">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >EMAIL ADDRESS</Form.Label>
                                <Form.Control className="fom-login" type="email" placeholder="Enter your Email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label >PASSWORD</Form.Label>
                                <Form.Control className="fom-login" type="password" placeholder="Enter your Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="REMEMBER ME" />
                            </Form.Group>
                            <Button variant="primary" type="LOGIN" className="btn-logn">
                                LOGIN
                            </Button>
                            <br />
                            <br />
                            <a href="/login" className="a-fom">FORGOT YOUR PASSWORD?</a>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer2 />
        </>
    )
}
