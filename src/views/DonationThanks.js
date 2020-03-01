import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";

class DonationThanks extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={3}/>
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Thanks for your donation!</h1>
                                <p>
                                    It's because of donations like yours that we can continue to provide
                                    valuable services to the community.
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

export default DonationThanks;