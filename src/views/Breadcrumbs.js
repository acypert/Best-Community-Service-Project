import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";

function Breadcrumbs(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/services">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{props.componentName}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Breadcrumbs;