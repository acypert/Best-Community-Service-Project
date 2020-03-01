import React from 'react';
import '../App.css';
import Service from "./Service";
import faker from "faker";

function PaidServices() {
    return (
        <div className="App">
            <Service name={"Gazebo"} ispaid={"Paid Service"} description={"Spend some time in one of our gazebos."} imageUrl={"https://www.thespruce.com/thmb/RNzNvbrjNO9kkOCkN0tk5ORTHpw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/182178037-56a75c5d5f9b58b7d0e98aa7.jpg"} />
            <Service name={"Dog Walking"} ispaid={"Paid Service"} description={"We walk your pet so you don't have to"} imageUrl={"https://noahapopka.com/wp-content/uploads/2018/10/AdobeStock_106985891-680x380@2x.jpeg"} />
            <Service name={"Swimming Pool"} ispaid={"Paid Service"} description={"Go for a dip"} imageUrl={"https://images.theconversation.com/files/307334/original/file-20191217-187608-1dr1y3t.jpg?ixlib=rb-1.1.0&rect=15%2C15%2C5074%2C3273&q=45&auto=format&w=496&fit=clip"} />
        </div>
    );
}

export default PaidServices;
