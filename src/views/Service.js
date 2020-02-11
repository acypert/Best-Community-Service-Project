import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";
import Image from "react-bootstrap/Image";

function Service(props) {
    return (
        <Container style={{marginTop: "10px"}}>
            <Row>
                <Col></Col>
                <Col sm={8}>
                    <Card>
                        <Card.Header style={{textAlign: "left"}}>{props.ispaid}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src="../logo192.png" rounded />
                                </Col>
                                <Col style={{textAlign: "right", verticalAlign: "bottom"}}>
                                    <Card.Title>{props.name}</Card.Title>
                                    <Card.Text>
                                        {props.description}
                                    </Card.Text>
                                    <Button variant="primary">Book</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Service;