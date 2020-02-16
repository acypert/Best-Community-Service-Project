import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Registered() {
    return (
        <Container>
            <Row>
                <Col />
                <Col lg={4}>
                    <Card>
                        <Card.Header as="h5" style={{textAlign: "center"}}>Congrats!</Card.Header>
                        <Card.Body>
                            <Card.Text style={{textAlign: "center"}}>
                                You have been registered
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Registered;