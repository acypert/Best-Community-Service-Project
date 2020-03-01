import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


class Donation extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col lg={1} />
                        <Col>
                            <Jumbotron fluid>
                                <Container>
                                    <h1>We appreciate your donation</h1>
                                    <hr />
                                    <p>
                                        You donations go a long way and we thank you.
                                        You can make a donation of any denomination.
                                    </p>
                                </Container>
                            </Jumbotron>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Donation Amount</Form.Label>
                                    <Form.Control type="currency" placeholder="$" />
                                    <Form.Text className="text-muted">
                                        Your donations keep us going
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Donate
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={1} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Donation;