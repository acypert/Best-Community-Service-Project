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
        <div style={{marginBottom: "50px"}}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/services">Best Community Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/services">Home</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/services">All Services</NavDropdown.Item>
                                <NavDropdown.Item href="/freeservices">Free Services</NavDropdown.Item>
                                <NavDropdown.Item href="/paidservices">Paid Services</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/rentals">Rentals</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <Button style={{marginLeft: "8px"}} href={"/login"}>Sign In</Button>
                            <Button variant="secondary" style={{marginLeft: "8px"}} href={"/register"}>Register</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/*<SectionHeader name={"Services"}/>*/}
        </div>
    )
}

export default MenuHeader;
