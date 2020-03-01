import React from 'react';
import '../App.css';
import Service from "./Service";
import faker from "faker";

function PaidServices() {
    return (
        <div className="App">
            <Service name={"Gazebo"} ispaid={"Paid Service"} description={"You will not regret this service."} imageUrl={faker.random.image()} />
            <Service name={"Dog Walking"} ispaid={"Paid Service"} description={"We walk your pet so you don't have to"} imageUrl={faker.random.image()} />
            <Service name={"Swimming Pool"} ispaid={"Paid Service"} description={"Go for a dip"} imageUrl={faker.random.image()} />
        </div>
    );
}

export default PaidServices;
