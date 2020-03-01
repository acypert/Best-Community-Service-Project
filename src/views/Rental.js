import React from "react";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Rental(props) {
    return (
        <Container style={{marginTop: "10px"}}>
            <Card>
                {/*<Card.Header style={{textAlign: "left"}}>{props.ispaid}</Card.Header>*/}
                <Card.Body>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={props.imageUrl} style={{width: "192px"}} rounded />
                        </Col>
                        <Col style={{textAlign: "right", verticalAlign: "bottom"}}>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                            <Button variant="primary">Rent {props.price}</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Rental;