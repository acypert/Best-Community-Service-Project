import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function Login() {
    return (
        <Container>
            <Row>
                <Col />
                <Col lg={4}>
                    <Card>
                        <Card.Header as="h5">Login</Card.Header>
                        <Card.Body>
                            {/*<Card.Title>Special title treatment</Card.Title>*/}
                            <Card.Text>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Card.Text>
                            <Link to={"/services"}>
                                <Button variant="primary" block>Login</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Login;