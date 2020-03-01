import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rental from "./Rental";
import faker from "faker";

function Rentals() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Rental title={"Tuxedos"} description={"A fine tuxedo for your day"} imageUrl={faker.random.image()} price={"$50"}/>
                    </Col>
                    <Col>
                        <Rental title={"Chairs"} description={"Chairs for your guests to sit"} imageUrl={faker.random.image()} price={"$10/per"}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Rental title={"Tractors"} description={"To till your lands"} imageUrl={faker.random.image()} price={"$200"}/>
                    </Col>
                    <Col sm={6}>
                        <Rental title={"Football Field"} description={"Win the championship"} imageUrl={faker.random.image()} price={"$25"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Rentals;