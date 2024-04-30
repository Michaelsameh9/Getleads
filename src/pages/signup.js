import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../pages/signup.css";
import Header from "./header";
import Footer2 from "./footer2";

import { Helmet} from 'react-helmet-async';



export default function Signup() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.fullname.trim()) {
            validationErrors.fullname = "FULL Name is required"
        }
        if (!formData.email.trim()) {
            validationErrors.email = "email is required"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is valid"
        }

        if (!formData.password.trim()) {
            validationErrors.password = " password is required"
        }

        else if (formData.password.length < 8) {
            validationErrors.password = "password should be at least 8 char"

        }
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0)
            alert("form submitted ")
    }
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Getleads - Signup</title>
                <meta name="description" content="Getleads - Signup" />
            </Helmet>
            <Header />
            <Container >
                <Row>
                    <Col className="fom-sign" >
                        <h4 className="p-fom" > Let's get starte </h4>
                        <p className="p-fom2" > SIGNIN UP FOR GETLEADS IS FASTER AND FREE </p> <Form onSubmit={
                            handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label >FULL NAME</Form.Label>
                                <Form.Control className="fom-login" type="text" placeholder="Enter your Full Name" onChange={
                                    handleChange} />
                                {errors.fullname && <span> {errors.fullname}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" > <Form.Label >EMAIL ADDRESS</Form.Label> <Form.Control className="fom-login" type="email" placeholder="Enter your Email" onChange={
                                handleChange
                            } />
                                {errors.email && <span> {errors.email}</span>}
                            </Form.Group> <Form.Group className="mb-3" controlId="formBasicPassword" > <Form.Label >PASSWORD</Form.Label> <Form.Control className="fom-login" type="password" placeholder="Enter your Password" onChange={
                                handleChange} /> {
                                    errors.password && <span> {errors.password}</span>}
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-sig" > SIGN UP </Button>
                            <br />
                            <br />
                            <p className="p-sign" >By clicking Signup you agree to the<a href="/" className="a-sign" > Terms </a>and <a href="/" className="a-sign" >Privacy Policy.</a>
                                <br />
                                Already have a GetLeads account?<a href="/" className="a-sign" >Sign in.</a></p> </Form>
                    </Col>
                </Row>
            </Container>
            <Footer2 />
        </>
    )
}
