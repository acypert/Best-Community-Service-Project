import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class BookedEvent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={3}/>
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Event</h1>
                                <p>
                                    You have booked this event!
                                </p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col lg={3}/>
                </Row>
            </Container>
        );
    }
}

export default BookedEvent;