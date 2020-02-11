import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function MenuHeader() {
    return (
        <Navbar bg="light" expand="lg" style={{marginBottom: "50px"}}>
            <Container>
                <Navbar.Brand href="#home">Best Community Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">All Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Free Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Paid Services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Events">Events</Nav.Link>
                        <Nav.Link href="#Rentals">Rentals</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuHeader;
