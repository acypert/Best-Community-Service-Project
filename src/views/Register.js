import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Register() {
    return (
        <Container>
            <Row>
                <Col />
                <Col lg={8}>
                    <Card>
                        <Card.Header as="h5">Register</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group controlId="formGroupName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="name" placeholder="First Name" />
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="name" placeholder="Last Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupLoginInfo">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <Button href={"/registered"} variant="primary" block>Submit</Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col />
            </Row>

        </Container>

    )
}

export default Register;