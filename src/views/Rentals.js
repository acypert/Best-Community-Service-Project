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
                        <Rental title={"Tuxedos"} description={"A fine tuxedo for your day"} imageUrl={"https://www.angeljackets.com/product_images/z/332/midnight_blue_tuxedo_suit__66052_zoom.jpg"} price={"$50"}/>
                    </Col>
                    <Col>
                        <Rental title={"Chairs"} description={"Chairs for your guests to sit"} imageUrl={"https://www.nationaleventsupply.com/images/thumbs/0003046_industrial-dining-chairs_370.jpeg"} price={"$10/per"}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Rental title={"Tractors"} description={"To till your lands"} imageUrl={"https://cdn.bringatrailer.com/wp-content/uploads/2019/11/1948_john_deere_tractor_model_a_1575313644276f7ebd598f3c19951DD058-4ACE-4E3B-A830-38C5697722E1-940x626.jpeg"} price={"$200"}/>
                    </Col>
                    <Col sm={6}>
                        <Rental title={"Football Field"} description={"Win the championship"} imageUrl={"https://athlonsports.com/sites/athlonsports.com/files/styles/article_top_img/public/Football_Field_Dimensions_1.jpg?itok=Pa3ilvTa"} price={"$25"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Rentals;