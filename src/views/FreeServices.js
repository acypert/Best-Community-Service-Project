import React from 'react';
import '../App.css';
import Service from "./Service";
import faker from "faker";

function FreeServices() {
    return (
        <div className="App">
            <Service name={"Horseshoes"} ispaid={"Free Service"} description={"Play some horseshoes on your own or in one of our tournaments."} imageUrl={"https://www.owntheyard.com/wp-content/uploads/2018/12/horseshoes2.jpg"} />
            <Service name={"Train Ride"} ispaid={"Free Service"} description={"Take a ride on our train that goes around the park"} imageUrl={"https://live.staticflickr.com/3016/2563040589_0c23c284b5_b.jpg"} />
            <Service name={"Soccer Field"} ispaid={"Free Service"} description={"Use our soccer field to get some exercise."} imageUrl={"https://cdn1.sportngin.com/attachments/photo/1040/6534/Soccer_Field_large.jpg"} />
        </div>
    );
}

export default FreeServices;
