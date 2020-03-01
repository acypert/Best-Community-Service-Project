import React from "react";
import Container from "react-bootstrap/Container";

function SectionHeader(props) {
    return (
        <Container style={{textAlign: "center"}}>
            {props.name}
        </Container>
    )
}

export default SectionHeader;