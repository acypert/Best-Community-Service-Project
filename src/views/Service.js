import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

class Service extends React.Component {
    render() {
        return (
            <Container style={{marginTop: "10px"}}>
                <Row>
                    <Col></Col>
                    <Col sm={8}>
                        <Card>
                            <Card.Header style={{textAlign: "left"}}>{this.props.ispaid}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Image src={this.props.imageUrl} style={{width: "192px"}} rounded />
                                    </Col>
                                    <Col style={{textAlign: "right", verticalAlign: "bottom"}}>
                                        <Card.Title>{this.props.name}</Card.Title>
                                        <Card.Text>
                                            {this.props.description}
                                        </Card.Text>
                                        <Link to={"/bookedservice"}>
                                            <Button variant="primary" >Book</Button>
                                        </Link>
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
}

export default Service;